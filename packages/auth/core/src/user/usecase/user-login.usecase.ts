import { AuthProvider } from '../provider'
import { UseCase, Email, ValidationError } from '@isaas/shared'
import User from '../model/user.entity'
import UserRepository from '../provider/user.repository'

export type Input = { email: string; password: string }

export default class UserLogin implements UseCase<Input, User> {
    constructor(
        private auth: AuthProvider,
        private repo: UserRepository,
    ) {}

    async execute(input: Input): Promise<User> {
        const email = new Email(input.email)

        const loggedUser = await this.auth.login(input.email, input.password)
        if (!loggedUser) {
            throw new ValidationError({ code: 'user.invalid-password' })
        }

        const user = await this.repo.getByEmail(email.value)
        if (!user) {
            throw new ValidationError({ code: 'user.not-found' })
        }

        return user.withoutPassword()
    }
}
