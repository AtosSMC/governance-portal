import { cn } from '@/lib/utils'
import { Drawer as DrawerPrimitive } from 'vaul'

export interface DrawerProps {
    direction: 'left' | 'right' | 'top' | 'bottom' | undefined
    open: boolean
    onOpenChange: (open: boolean) => void
    children: React.ReactNode
    className?: string
}

export default function Drawer(props: DrawerProps) {
    return (
        <DrawerPrimitive.Root direction={props.direction} open={props.open} onOpenChange={props.onOpenChange}>
            <DrawerPrimitive.Portal>
                <DrawerPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80" />
                <DrawerPrimitive.Content
                    className={cn(
                        'fixed inset-x-0 bottom-0 z-50 flex h-auto flex-col bg-background',
                        props.className ?? '',
                    )}
                >
                    <DrawerPrimitive.Title />
                    <DrawerPrimitive.Description />
                    {props.children}
                </DrawerPrimitive.Content>
            </DrawerPrimitive.Portal>
        </DrawerPrimitive.Root>
    )
}
