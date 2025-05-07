import Link from '../shared/link.component'
import Logo from './logo.component'

export default function ExternalHeader() {
    return (
        <header className="flex justify-between items-center h-16 w-full px-7">
            <Logo href="/" />
            <div className="flex items-center gap-6">
                <Link href="/login" className='text-blue-900'>
                    Log In
                </Link>
                {/* <Link href="/signup">Sign Up</Link> */}
            </div>
        </header>
    )
}
