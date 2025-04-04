'use client'
import { DropdownMenu } from '../shared/dropdown.component'
import { IconLayoutDashboard, IconLogout, IconUser } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import Avatar from './avatar.component'
import useAuth from '@/data/hooks/auth.hook'

export default function UserMenu() {
    const { user, logout } = useAuth()
    const router = useRouter()

    function goTo(route: string, newTab = false) {
        return () => {
            if (newTab) {
                window.open(route, '_blank')
            } else {
                router.push(route)
            }
        }
    }

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className="outline-hidden">
                <Avatar
                    image={user?.imageUrl}
                    fallback={user?.initials ?? 'US'}
                ></Avatar>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
                className={`
                    border border-zinc-700 p-2 rounded-md
                    bg-black mx-4 mt-2
                `}
            >
                <DropdownMenu.Group>
                    <DropdownMenu.Label>User Menu</DropdownMenu.Label>
                    <DropdownMenu.Item onSelect={goTo('/dashboard')}>
                        <IconLayoutDashboard size={18} />
                        <span>Dashboard</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={goTo('/profile')}>
                        <IconUser size={18} />
                        <span>My Profile</span>
                    </DropdownMenu.Item>
                </DropdownMenu.Group>
                <DropdownMenu.Separator />
                <DropdownMenu.Item className="text-red-500" onSelect={logout}>
                    <IconLogout size={18} />
                    <span>Logout</span>
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}
