import { cn } from '@/lib/utils'
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'

function Content(props: DropdownPrimitive.DropdownMenuContentProps) {
    return <DropdownPrimitive.Content {...props} className={cn('flex flex-col min-w-56', props.className)} />
}

function Group(props: DropdownPrimitive.DropdownMenuGroupProps) {
    return <DropdownPrimitive.Group {...props} className={cn('flex flex-col', props.className)} />
}

function Label(props: DropdownPrimitive.DropdownMenuLabelProps) {
    return (
        <DropdownPrimitive.Label
            {...props}
            className={cn('text-sm text-zinc-300 font-semibold', 'px-6 py-2.5', props.className)}
        />
    )
}

function Item(props: DropdownPrimitive.DropdownMenuItemProps) {
    return (
        <DropdownPrimitive.Item
            {...props}
            className={cn(
                'flex items-center gap-3 rounded-md',
                'px-6 py-2 outline-hidden text-zinc-200 cursor-pointer',
                'hover:bg-zinc-900 hover:text-white',
                props.className,
            )}
        />
    )
}

function Separator(props: DropdownPrimitive.DropdownMenuSeparatorProps) {
    return <DropdownPrimitive.Separator {...props} className={cn('bg-zinc-900 h-px my-2', props.className)} />
}

export const DropdownMenu = {
    Root: DropdownPrimitive.Root,
    Trigger: DropdownPrimitive.Trigger,
    Content,
    Group,
    Label,
    Item,
    Separator,
}
