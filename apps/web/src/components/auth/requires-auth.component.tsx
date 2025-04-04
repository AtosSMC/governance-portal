'use client'
import useAuth from '@/data/hooks/auth.hook'
import { useRouter } from 'next/navigation'

export default function RequiresAuth(props: any) {
    const { ready, user } = useAuth()
    const router = useRouter()

    if (!ready) return null
    if (!user) {
        router.push('/login')
        return null
    }

    return props.children
}
