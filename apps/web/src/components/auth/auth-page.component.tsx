'use client'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import AuthForm from './auth-form.component'
import AuthMode from '@/components/auth/auth-mode.component'
import Button from '../shared/button.component'
import Image from 'next/image'
import Logo from '@/components/template/logo.component'
import useAuth from '@/data/hooks/auth.hook'
import useAuthForm from '@/data/hooks/auth-form.hook'

export default function AuthPage(props: { type: 'login' | 'signup' }) {
    const { ready, user: loggedUser } = useAuth()
    const { user, setUser, login, loginGoogle, register } = useAuthForm()
    const router = useRouter()

    useEffect(() => {
        if (!ready || !loggedUser) return
        router.push('/dashboard')
    }, [ready, loggedUser, router])

    return (
        ready &&
        !loggedUser && (
            <div className="flex h-screen p-2">
                <div className="hidden lg:block flex-1 h-full rounded-r-3xl overflow-hidden relative">
                    <div
                        className={cn(
                            'absolute h-full w-full flex-1 flex flex-col justify-end px-7 py-16',
                            'bg-gradient-to-b from-purple-900/80 via-black/80 to-black',
                        )}
                    >
                        <span className="text-5xl font-extralight text-white/50">Intelligent Ideas</span>
                        <span className="text-3xl font-bold text-white/50">for Intelligent People</span>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-between items-center py-7">
                    <Logo href="/" className="text-3xl" />
                    <div className="flex flex-col gap-5 w-3/5">
                        <div className="flex flex-col items-center">
                            <h1 className="text-3xl self-center bg-gradient-to-r from-zinc-200 to-zinc-600 bg-clip-text text-transparent">
                                {props.type === 'login' ? 'Welcome Back' : 'Create Account'}
                            </h1>
                            <h2 className="text-sm text-zinc-400 text-center">
                                {props.type === 'login'
                                    ? 'Join and start creating the best ideas'
                                    : 'Sign up and let AI transform your ideas into value'}
                            </h2>
                        </div>
                        <AuthForm
                            type={props.type}
                            user={user}
                            onChange={setUser}
                            onSubmit={props.type === 'login' ? login : register}
                        />
                        <Button onClick={props.type === 'login' ? login : register}>
                            {props.type === 'login' ? 'Log in' : 'Sign up'}
                        </Button>
                        <Button onClick={loginGoogle} outline>
                            <Image src="/google.svg" alt="Google" height={20} width={20} />
                            Continue with Google
                        </Button>
                    </div>
                    <AuthMode />
                </div>
            </div>
        )
    )
}
