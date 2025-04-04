import { User } from '../model'

export type AuthObserver = (user: User | null) => void
export type AuthUnsubscribe = () => void

export default interface AuthProvider {
    login(email: string, password: string): Promise<User | null>
    loginWithProvider(providerId: string): Promise<User | null>
    logout(): Promise<void>
    observe(observer: AuthObserver): AuthUnsubscribe
    register(user: User): Promise<void>
    updatePassword(user: User, newPassword: string): Promise<void>
}
