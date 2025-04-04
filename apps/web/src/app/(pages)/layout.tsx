import { AuthProvider } from '@/data/contexts/auth.context'
import { ToastProvider } from '@/data/contexts/toast.context'
import Toaster from '@/components/template/toaster.component'

export default function Layout(props: any) {
    return (
        <ToastProvider>
            <AuthProvider>
                <Content {...props} />
            </AuthProvider>
        </ToastProvider>
    )
}

function Content(props: any) {
    return (
        <div className="relative">
            {props.children}
            <Toaster className="absolute bottom-10 right-10" />
        </div>
    )
}
