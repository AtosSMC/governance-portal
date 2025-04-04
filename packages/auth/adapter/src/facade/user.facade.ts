import { UserLogin, UserRegistration, UserRepository, AuthProvider, UserSocialLogin } from '@isaas/auth'
import { UserDTO } from '../dto'

export default class UserFacade {
    async login(props: {
        repo: UserRepository
        auth: AuthProvider
        email: string
        password: string
    }): Promise<UserDTO> {
        const { repo, auth, email, password } = props
        const useCase = new UserLogin(auth, repo)
        const user = await useCase.execute({ email, password })

        return {
            ...user.withoutPassword().props,
            initials: user.name.initials,
        }
    }

    async loginSocial(props: { repo: UserRepository; auth: AuthProvider; provider: string }): Promise<UserDTO> {
        const { repo, auth, provider } = props
        const useCase = new UserSocialLogin(auth, repo)
        const user = await useCase.execute(provider)

        return {
            ...user.withoutPassword().props,
            initials: user.name.initials,
        }
    }

    async register(props: {
        auth: AuthProvider
        repo: UserRepository
        name: string
        email: string
        password: string
    }): Promise<void> {
        const { auth, repo, name, email, password } = props
        const useCase = new UserRegistration(auth, repo)
        await useCase.execute({ name, email, password })
    }
}
