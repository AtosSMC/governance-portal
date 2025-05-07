import { cn } from '@/lib/utils'
import Link from '../shared/link.component'

export interface LogoProps {
    href?: string
    className?: string
}

export default function Logo(props: LogoProps) {
    const content = (
        <h1
            className={cn(
                'bg-blue-500',
                'bg-clip-text text-transparent text-xl font-bold',
                props.className,
            )}
        >
            Atos 
        </h1>
    )

    return props.href ? (
        <Link href={props.href} noStyle>
            {content}
        </Link>
    ) : (
        content
    )
}
