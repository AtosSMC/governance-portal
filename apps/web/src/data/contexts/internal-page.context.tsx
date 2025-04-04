'use client'
import { createContext, useEffect, useState } from 'react'
import useDimensions from '../hooks/dimensions.hook'

export interface InternalPageContextProps {
    sidebarOpen: boolean
    mobile: boolean
    setSidebarOpen: (open: boolean) => void
    toggleSidebar: () => void
}

const InternalPageContext = createContext<InternalPageContextProps>({} as any)

export function InternalPageProvider(props: any) {
    const { xs, sm, md } = useDimensions()
    const [sidebarOpen, setSidebarOpen] = useState(true)

    useEffect(() => {
        setSidebarOpen(!xs && !sm && !md)
    }, [xs, sm, md])

    return (
        <InternalPageContext.Provider
            value={{
                sidebarOpen,
                mobile: xs || sm || md,
                setSidebarOpen,
                toggleSidebar: () => setSidebarOpen(!sidebarOpen),
            }}
        >
            {props.children}
        </InternalPageContext.Provider>
    )
}

export default InternalPageContext
