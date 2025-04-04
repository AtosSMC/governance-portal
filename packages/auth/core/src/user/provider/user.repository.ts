import { User } from '../model'

export default interface UserRepository {
    save(user: User): Promise<void>
    getByEmail(email: string): Promise<User | null>
}
