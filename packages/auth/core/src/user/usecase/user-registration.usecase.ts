import { Email, PersonName, StrongPassword, UseCase, ValidationError } from '@isaas/shared'
import { AuthProvider } from '../provider'
import User from '../model/user.entity'
import UserRepository from '../provider/user.repository'

export type Input = {
    name: string
    email: string
    password: string
}

export default class UserRegistration implements UseCase<Input, void> {
    constructor(
        private auth: AuthProvider,
        private repo: UserRepository,
    ) {}

    async execute(input: Input): Promise<void> {
        const name = new PersonName(input.name)
        const email = new Email(input.email)
        const password = new StrongPassword(input.password)

        const user: User = new User({
            name: name.value,
            email: email.value,
            password: password.value,
        })

        const existingUser = await this.repo.getByEmail(email.value)
        if (existingUser) {
            throw new ValidationError({ code: 'user.already-exists' })
        }

        const authUser = await this.registerOrLogin(user)
        if (!authUser) return

        await this.repo.save(
            authUser.clone({
                name: name.value,
                email: email.value,
                password: undefined,
            }),
        )
    }

    private async registerOrLogin(user: User): Promise<User | null> {
        try {
            await this.auth.register(user)
        } catch {
            // will enter here if there is an error in the previous registration
        }

        const existingUser = await this.auth.login(user.email.value, user.password?.value!)
        return existingUser
    }
}
