'use client'
import { cn } from '@/lib/utils'
import { IconX } from '@tabler/icons-react'
import * as Toast from '@radix-ui/react-toast'
import useToast from '@/data/hooks/toast-hook'

export interface ToasterProps {
    className?: string
}

export default function Toaster(props: ToasterProps) {
    const { toasts, removeToast } = useToast()

    return (
        <Toast.Provider>
            {toasts.map((toast: any) => {
                return (
                    <Toast.Root
                        key={toast.id}
                        duration={toast.duration}
                        className={cn(
                            'flex items-center gap-5 px-6 py-4 rounded-md',
                            'border border-zinc-700 relative',
                            toast.type === 'success' && 'bg-green-600/80',
                            toast.type === 'warning' && 'bg-yellow-600/80',
                            toast.type === 'info' && 'bg-blue-600/80',
                            toast.type === 'error' && 'bg-red-600/80',
                        )}
                    >
                        <div className="flex flex-col gap-1">
                            {toast.title && <Toast.Title className="text-white font-bold">{toast.title}</Toast.Title>}
                            {toast.description && (
                                <Toast.Description
                                    className={cn(
                                        'text-zinc-300 text-sm font-light',
                                        toast.type !== 'default' && 'text-white',
                                    )}
                                >
                                    {toast.description}
                                </Toast.Description>
                            )}
                        </div>
                        <Toast.Close onClick={() => removeToast(toast.id!)}>
                            <IconX
                                size={18}
                                className={cn('text-zinc-400 cursor-pointer', toast.type !== 'default' && 'text-white')}
                            />
                        </Toast.Close>
                    </Toast.Root>
                )
            })}
            <Toast.Viewport className={cn('flex flex-col gap-2', props.className)} />
        </Toast.Provider>
    )
}
