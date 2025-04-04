import { cn } from '@/lib/utils'

interface SidebarProps {
    children: React.ReactNode
    noPadding?: boolean
    noBorder?: boolean
    className?: string
}

export default function Sidebar(props: SidebarProps) {
    return (
        <aside
            className={cn(
                'w-72 h-screen overflow-y-auto',
                !props.noBorder && 'border-r border-zinc-900',
                !props.noPadding && 'p-6',
                props.className ?? '',
            )}
        >
            {props.children}
        </aside>
    )
}
