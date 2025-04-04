import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    noStyle?: boolean
    outline?: boolean
    href?: string
}

export default function Button(props: ButtonProps) {
    const { children, className, noStyle, outline, ...rest } = props
    return (
        <button
            className={cn({
                'px-4 py-2 font-bold text-black/70 text-sm bg-white/90': !noStyle,
                'rounded-md shadow-md hover:bg-white': !noStyle,
                'border border-white/20 bg-transparent hover:bg-transparent hover:border-white/50 text-white/70':
                    outline,
                className,
            })}
            {...rest}
        >
            <div className="flex justify-center gap-2">{children}</div>
        </button>
    )
}
