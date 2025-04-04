import ExternalHeader from '@/components/template/external-header.component'
import { cn } from '@/lib/utils'

export interface ExternalPageProps {
    children?: React.ReactNode
    noStyle?: boolean
    className?: string
}

export default function ExternalPage(props: ExternalPageProps) {
    const { children, noStyle, className } = props
    return (
        <div className="flex flex-col min-h-screen">
            <ExternalHeader />
            <div
                className={cn(
                    {
                        'flex-1 flex flex-col justify-center items-center': !noStyle,
                        'py-16': children,
                    },
                    className,
                )}
            >
                {children}
            </div>
        </div>
    )
}
