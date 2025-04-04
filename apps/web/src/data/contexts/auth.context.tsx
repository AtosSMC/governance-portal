'use client'
import { AuthUnsubscribe } from '@isaas/auth'
import { createContext, useEffect, useState } from 'react'
import { UserDTO } from '@isaas/auth-adapter'
import fb from '@/firebase'

interface AuthContextProps {
    ready: boolean
    user: UserDTO | null
    logout: () => void
}

const AuthContext = createContext<AuthContextProps>({} as any)

export function AuthProvider({ children }: any) {
    const [ready, setReady] = useState<boolean>(false)
    const [user, setUser] = useState<UserDTO | null>(null)

    useEffect(() => {
        let unsubscribe: AuthUnsubscribe
        ;(async () => {
            unsubscribe = fb.auth.observe((user) => {
                setUser(
                    user
                        ? {
                              ...user.withoutPassword().props,
                              initials: user.name.initials,
                          }
                        : null,
                )
                setReady(true)
            })
        })()
        return () => unsubscribe?.()
    }, [])

    function logout() {
        fb.auth.logout()
    }

    return <AuthContext.Provider value={{ ready, user, logout }}>{children}</AuthContext.Provider>
}

export default AuthContext
