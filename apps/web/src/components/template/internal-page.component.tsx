import { cn } from '@/lib/utils'
import { IconHome, IconLayoutGrid, IconPlayerPlay, IconSearch } from '@tabler/icons-react'
import { MainMenu } from './main-menu.component'
import { usePathname } from 'next/navigation'
import Drawer from '../shared/drawer.component'
import InternalHeader from './internal-header.component'
import Logo from './logo.component'
import Sidebar from './sidebar.component'
import useInternalPage from '@/data/hooks/internal-page.hook'

export interface InternalPageProps {
    children?: React.ReactNode
    noStyle?: boolean
    className?: string
}

export default function InternalPage(props: InternalPageProps) {
    const { children, noStyle, className } = props
    const { mobile, sidebarOpen, setSidebarOpen } = useInternalPage()
    const path = usePathname()

    function item(href: string, icon: React.ElementType, label: string) {
        return (
            <MainMenu.Item href={href} icon={icon as any} selected={path.startsWith(href)}>
                {label}
            </MainMenu.Item>
        )
    }

    function withDrawer(children: React.ReactNode) {
        return (
            <Drawer
                direction="left"
                open={sidebarOpen}
                onOpenChange={setSidebarOpen}
                className="right-0 top-0 bottom-0 bg-black z-50 w-72 rounded-none"
            >
                {children}
            </Drawer>
        )
    }

    const sidebar = (
        <Sidebar className="relative flex border-r border-zinc-900 bg-[url('/sidebar-bg.jpg')] bg-cover bg-center">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/90 via-black to-black"></div>
            <div className="flex flex-col w-full gap-7 z-20">
                <Logo href="/dashboard" />
                <MainMenu.Root className="gap-6">
                    {item('/dashboard', IconHome, 'Dashboard')}
                    <MainMenu.Group title="Options" titleClassName="px-4">
                        {item('/others/a', IconSearch, 'Page A')}
                        {item('/others/b', IconLayoutGrid, 'Page B')}
                        {item('/others/c', IconPlayerPlay, 'Page C')}
                    </MainMenu.Group>
                </MainMenu.Root>
            </div>
        </Sidebar>
    )

    return (
        <div className="flex min-h-screen">
            {mobile ? withDrawer(sidebar) : sidebarOpen ? sidebar : null}
            <div className="flex-1 flex flex-col ">
                <InternalHeader />
                <div className="flex-1 flex">
                    <div
                        className={cn(
                            {
                                'flex-1 flex flex-col': !noStyle,
                                'p-7': children,
                            },
                            className,
                        )}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
