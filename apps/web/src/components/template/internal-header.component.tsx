'use client'
import { cn } from '@/lib/utils'
import SidebarToggle from './sidebar-toggle.component'
import UserMenu from './user-menu.component'

export default function InternalHeader() {
    return (
        <header className={cn('flex justify-between items-center h-16 w-full px-7', 'border-b border-zinc-800')}>
            <div className="flex items-center gap-3">
                <SidebarToggle />
            </div>
            <UserMenu />
        </header>
    )
}
