/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { usePathname } from 'next/navigation'
import Link from '../shared/link.component'

export default function AuthType() {
    const path = usePathname()
    const isLogin = path === '/login'
    return (
        <div className="flex items-center gap-2">
            {/* <span className="text-zinc-400">
                {isLogin
                    ? "Don't have an account?"
                    : 'Already have an account?'}
            </span> */}
            {/* <Link
                href={isLogin ? '/signup' : '/login'}
                className="text-primary font-semibold"
                noStyle
            >
                {isLogin ? 'Sign up' : 'Log in'}
            </Link> */}
        </div>
    )
}
