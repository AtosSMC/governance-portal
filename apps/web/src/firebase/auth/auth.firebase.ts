import { AuthObserver, AuthProvider, AuthUnsubscribe, User } from '@isaas/auth'
import {
    Auth,
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    getAuth,
    GoogleAuthProvider,
    OAuthProvider,
    onIdTokenChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updatePassword,
    User as FirebaseUser,
} from 'firebase/auth'
import { app } from '../config'
import { PersonName } from '@isaas/shared'
import UserFirestore from '../db/user.firestore'

export default class AuthFirebase implements AuthProvider {
    private auth: Auth
    private repo: UserFirestore

    constructor() {
        this.auth = getAuth(app)
        this.repo = new UserFirestore()
    }

    async login(email: string, password: string): Promise<User | null> {
        const resp = await signInWithEmailAndPassword(this.auth, email, password)
        return this.normalizeUser(resp.user)
    }

    async loginWithProvider(providerId: string): Promise<User | null> {
        const providers: any = {
            'google.com': () => new GoogleAuthProvider(),
            'facebook.com': () => new FacebookAuthProvider(),
            'yahoo.com': () => new OAuthProvider('yahoo.com'),
        }

        const provider = providers[providerId]?.() ?? null

        if (!provider) return null
        try {
            const credentials = await signInWithPopup(this.auth, provider)
            return this.normalizeUser(credentials?.user)
        } catch (e: any) {
            console.error(e)
            return null
        }
    }

    async logout(): Promise<void> {
        await signOut(this.auth)
    }

    async register(user: User): Promise<void> {
        await createUserWithEmailAndPassword(this.auth, user.email.value, user.password?.value ?? '')
    }

    async updatePassword(user: User, newPassword: string): Promise<void> {
        await this.login(user.email.value, user.password?.value ?? '')
        const currentUser = this.auth.currentUser

        if (!currentUser) return
        await updatePassword(currentUser, newPassword)
    }

    observe(observer: AuthObserver): AuthUnsubscribe {
        return onIdTokenChanged(this.auth, async (user) => {
            observer(await this.normalizeUser(user))
        })
    }

    private async normalizeUser(firebaseUser?: FirebaseUser | null): Promise<User | null> {
        if (!firebaseUser || !firebaseUser.email) return null

        const savedUser = await this.repo.getByEmail(firebaseUser.email)
        if (savedUser) return savedUser

        const user = new User({
            id: firebaseUser.uid,
            email: firebaseUser.email,
            name: this.getValidUserName(firebaseUser),
            imageUrl: firebaseUser.photoURL,
            emailVerified: firebaseUser.emailVerified,
            provider: firebaseUser.providerData[0].providerId,
            createdAt: new Date(),
        })

        return user
    }

    private getValidUserName(user: FirebaseUser): string {
        try {
            return new PersonName(user.displayName!).value
        } catch {
            try {
                const name = user.displayName
                const email = user.email?.split('@')[0]
                return new PersonName(`${name} ${email}`).value
            } catch {
                return 'Usuário Anônimo'
            }
        }
    }
}
