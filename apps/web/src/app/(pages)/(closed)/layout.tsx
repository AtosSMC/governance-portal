'use client'
import { InternalPageProvider } from '@/data/contexts/internal-page.context'
import RequiresAuth from '@/components/auth/requires-auth.component'
import InternalPage from '@/components/template/internal-page.component'

export default function Layout(props: any) {
    return (
        <RequiresAuth>
            <InternalPageProvider>
                <InternalPage>{props.children}</InternalPage>
            </InternalPageProvider>
        </RequiresAuth>
    )
}
