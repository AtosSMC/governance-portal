import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    noStyle?: boolean
    onChangeValue?: (value: string) => void
    outerClassName?: string
}

export default function Input(props: InputProps) {
    const { className, outerClassName, noStyle, onChangeValue, ...rest } = props
    return (
        <div className={cn('flex flex-col', outerClassName)}>
            {/* {props.label && <label className="text-sm text-zinc-600 px-2">{props.label}</label>} */}
            <input
                className={cn({
                    'px-4 py-2 font-bold text-zinc-600 text-sm bg-slate-200': !noStyle,
                    'rounded-md shadow-md border border-zinc-200/20': !noStyle,
                    className,
                })}
                {...rest}
                onChange={(e) => {
                    props.onChange?.(e)
                    onChangeValue?.(e.target.value)
                }}
            ></input>
        </div>
    )
}
