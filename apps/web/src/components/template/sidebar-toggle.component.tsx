'use client'
import { IconMenu2, IconX } from '@tabler/icons-react'
import useInternalPage from '@/data/hooks/internal-page.hook'

export default function SidebarToggle() {
    const { sidebarOpen, toggleSidebar } = useInternalPage()

    return (
        <button onClick={toggleSidebar} className="text-zinc-500">
            {sidebarOpen ? <IconX stroke={1} /> : <IconMenu2 stroke={1} />}
        </button>
    )
}
