import { auth, UserDTO } from '@isaas/auth-adapter'
import { useState } from 'react'
import fb from '@/firebase'
import useToast from './toast-hook'

export default function useAuthForm() {
    const [user, setUser] = useState<UserDTO>({})
    const { toast } = useToast()

    async function login() {
        try {
            if (!user.email || !user.password) return
            await auth.user.login({
                repo: fb.db.user,
                auth: fb.auth,
                email: user.email,
                password: user.password,
            })
            clear()
        } catch (error: any) {
            toast({
                type: 'error',
                title: 'title.error',
                description: error.message ?? 'try.later',
            })
        }
    }

    async function loginGoogle() {
        try {
            await auth.user.loginSocial({
                repo: fb.db.user,
                auth: fb.auth,
                provider: 'google.com',
            })
            clear()
        } catch (error: any) {
            toast({
                type: 'error',
                title: 'title.error',
                description: error.message ?? 'try.later',
            })
        }
    }

    async function register() {
        try {
            if (!user.email || !user.password || !user.name) return
            await auth.user.register({
                repo: fb.db.user,
                auth: fb.auth,
                name: user.name,
                email: user.email,
                password: user.password,
            })
            await login()
        } catch (error: any) {
            toast({
                type: 'error',
                title: 'title.error',
                description: error.message ?? 'try.later',
            })
        }
    }

    function clear() {
        setUser({})
    }

    return {
        user,
        login,
        loginGoogle,
        register,
        setUser,
    }
}
