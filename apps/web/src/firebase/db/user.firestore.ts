import { User, UserProps, UserRepository } from '@isaas/auth'
import {
    doc,
    Firestore,
    getDoc,
    getFirestore,
    setDoc,
} from 'firebase/firestore'

export default class UserFirestore implements UserRepository {
    private readonly firestore: Firestore

    constructor() {
        this.firestore = getFirestore()
    }

    async save(user: User): Promise<void> {
        const docRef = doc(this.firestore, 'users', user.email.value)
        await setDoc(docRef, user.withoutPassword().props)
    }

    async getByEmail(email: string): Promise<User | null> {
        const docRef = doc(this.firestore, 'users', email)
        const snapshot = await getDoc(docRef)

        if (!snapshot.data()) return null
        return new User(snapshot.data() as UserProps)
    }
}
