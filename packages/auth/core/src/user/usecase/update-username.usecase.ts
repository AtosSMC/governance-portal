import { UseCase, ValidationError, PersonName } from '@isaas/shared'
import UserRepository from '../provider/user.repository'
import User from '../model/user.entity'

export default class UpdateUsername implements UseCase<string, void> {
    constructor(private repository: UserRepository) {}

    async execute(name: string, user: User): Promise<void> {
        const validName = new PersonName(name)

        const existingUser = await this.repository.getByEmail(user.email.value)
        if (!existingUser) {
            throw new ValidationError({ code: 'user.not-found' })
        }

        const updatedUser: User = existingUser.clone({
            name: validName.value,
        })
        return this.repository.save(updatedUser)
    }
}
