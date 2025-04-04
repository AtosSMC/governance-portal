import { AuthProvider } from '../provider'
import { UseCase, ValidationError } from '@isaas/shared'
import User from '../model/user.entity'
import UserRepository from '../provider/user.repository'

export default class UserSocialLogin implements UseCase<string, User> {
    constructor(
        private auth: AuthProvider,
        private repo: UserRepository,
    ) {}

    async execute(provider: string): Promise<User> {
        const loggedUser = await this.auth.loginWithProvider(provider)

        if (!loggedUser) {
            throw new ValidationError({ code: 'user.not-found' })
        }

        const user = await this.repo.getByEmail(loggedUser.email.value)
        if (user) return user.withoutPassword()

        await this.repo.save(loggedUser.withoutPassword())
        return loggedUser.withoutPassword()
    }
}
