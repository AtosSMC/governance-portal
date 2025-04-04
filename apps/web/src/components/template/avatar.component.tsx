'use client'
import { useState } from 'react'
import Image from 'next/image'

export interface AvatarProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    image?: string | null
    fallback?: string | null
}

export default function Avatar(props: AvatarProps) {
    const { image, fallback, ...buttonProps } = props
    const [error, setError] = useState(false)
    return (
        <div
            {...buttonProps}
            className="flex justify-center items-center 
            min-w-10 min-h-10 max-w-10 max-h-10 rounded-full 
            overflow-hidden relative bg-purple-700"
        >
            {(error || !image) && fallback && (
                <span className="text-sm font-bold text-zinc-200 hover:text-white">
                    {fallback}
                </span>
            )}
            {!error && image && (
                <Image
                    src={image}
                    alt="Avatar"
                    fill
                    sizes="100px"
                    className="object-cover"
                    onError={() => setError(true)}
                />
            )}
        </div>
    )
}
