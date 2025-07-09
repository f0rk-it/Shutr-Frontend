import { useState } from 'react'
import '../styles/skeleton.css'

export default function ImageWithSkeleton({ src, alt, className, skeletonClassName, ...props }) {
    const [loaded, setLoaded] = useState(false)

    const handleImageLoad = () => {
        setLoaded(true)
    }

    return (
        <div className={`image-skeleton-wrapper ${className || ''}`} {...props}>
            <div className={`image-skeleton ${skeletonClassName || ''} ${loaded ? 'loaded' : ''}`}></div>
            <img
                src={src}
                alt={alt}
                className={`image-loading ${loaded ? 'loaded' : ''} ${className || ''}`}
                onLoad={handleImageLoad}
                style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    display: 'block',
                }}
            />
        </div>
    )
}
