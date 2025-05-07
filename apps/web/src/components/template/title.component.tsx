import { cn } from '@/lib/utils'

export interface TitleProps {
    main?: string
    sub?: string
    icon?: React.ElementType
}

export default function Title(props: TitleProps) {
    return (
        <div className={cn('flex items-center gap-2')}>
            {props.icon && <props.icon size={50} stroke={1} className="text-zinc-600" />}
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-zinc-600">{props.main}</h1>
                {props.sub && <span className="text-sm text-zinc-900">{props.sub}</span>}
            </div>
        </div>
    )
}
