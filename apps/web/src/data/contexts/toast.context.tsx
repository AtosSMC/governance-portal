'use client'
import { createContext, useCallback, useState } from 'react'
import { Id } from '@isaas/shared'
import BrowserTranslator from '@/i18n/translator'

export interface ToastProps {
    id?: string
    title?: string
    description?: any
    duration?: number
    type?: 'success' | 'error' | 'warning' | 'info' | 'default'
}

export interface ToastContextProps {
    toasts: ToastProps[]
    toast: (props: ToastProps) => void
    removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextProps>({} as any)

export function ToastProvider(props: any) {
    const [toasts, setToasts] = useState<ToastProps[]>([])

    const toast = useCallback((props: ToastProps) => {
        const translator = new BrowserTranslator()
        const message = {
            ...props,
            id: props.id ?? Id.createUUID(),
            duration: props.duration ?? 5000,
            title: translator.translate(props.title ?? ''),
            description: translator.translate(props.description ?? ''),
        }

        setToasts((toasts) => [...toasts, message])
        setTimeout(() => {
            setToasts((toasts) => toasts.filter((t) => t.id !== message.id))
        }, message.duration)
    }, [])

    const removeToast = useCallback((id: string) => {
        setToasts((toasts) => toasts.filter((t) => t.id !== id))
    }, [])

    return <ToastContext.Provider value={{ toasts, toast, removeToast }} {...props} />
}

export default ToastContext
