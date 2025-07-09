import { useState, useEffect, useCallback } from 'react'
import '../styles/loading-screen.css'
import CameraAnimation from '../assets/animation/camera-animation.webm'

export default function LoadingScreen({ onComplete }) {
    const [isAnimationComplete, setIsAnimationComplete] = useState(false)
    const [isFadingOut, setIsFadingOut] = useState(false)

    const startFadeOut = useCallback(() => {
        setIsFadingOut(true)
        // Call onComplete after fade animation
        setTimeout(() => {
            if (onComplete) {
                onComplete()
            }
        }, 800) // Match CSS transition duration
    }, [onComplete])

    useEffect(() => {
        // Ensure minimum loading time for UX
        const minLoadTime = setTimeout(() => {
            if (isAnimationComplete) {
                startFadeOut()
            }
        }, 1000) // Minimum 1 second loading

        return () => clearTimeout(minLoadTime)
    }, [isAnimationComplete, startFadeOut])

    const handleVideoEnd = () => {
        setIsAnimationComplete(true)
        // Small delay before starting fade out
        setTimeout(() => {
            startFadeOut()
        }, 500)
    }

    const handleVideoError = () => {
        console.warn('Camera animation failed to load, skipping to page')
        startFadeOut()
    }

    return (
        <div className={`loading-screen ${isFadingOut ? 'fade-out' : ''}`}>
            <div className="loading-background"></div>
            <div className="loading-content">
                <video
                    className="camera-animation"
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    onError={handleVideoError}
                    preload="auto"
                >
                    <source src={CameraAnimation} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                
                {/* Fallback loading indicator */}
                <div className="loading-fallback">
                    <div className="loading-spinner"></div>
                    <p>Loading...</p>
                </div>
            </div>
        </div>
    )
}
