import Logo from '../template/logo.component'

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Logo className="text-6xl" />
            <p className="text-sm text-zinc-500">Customer Governance Portal</p>
        </div>
    )
}
