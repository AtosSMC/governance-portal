'use client'
import { useState, useEffect } from 'react'

function getWindowDimensions(window: Window) {
    return () => {
        const { innerWidth, innerHeight } = window ?? {
            innerWidth: -1,
            innerHeight: -1,
        }
        return {
            width: innerWidth,
            height: innerHeight,
        }
    }
}

export default function useDimensions() {
    const [dimensions, setDimensions] = useState({ width: -1, height: -1 })

    useEffect(() => {
        const getDimensions = getWindowDimensions(window)

        function onResize() {
            setDimensions(getDimensions())
        }

        onResize()
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    function between(min: number, max: number) {
        return dimensions.width >= min && dimensions.width < max
    }

    return {
        ...dimensions,
        xs: between(0, 640),
        sm: between(640, 768),
        md: between(768, 1024),
        lg: between(1024, 1280),
        xl: between(1280, 1536),
        xl2: between(1536, Number.MAX_VALUE),
    }
}
