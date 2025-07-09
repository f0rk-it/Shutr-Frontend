import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { LoadingContext } from './LoadingContextDefinition'

export function LoadingProvider({ children }) {
    const [isLoading, setIsLoading] = useState(true)
    const [hasShownInitialLoading, setHasShownInitialLoading] = useState(false)
    const location = useLocation()

    // Show loading on initial page load
    useEffect(() => {
        if (!hasShownInitialLoading) {
            setIsLoading(true)
        }
    }, [hasShownInitialLoading])

    // Show loading on route changes (except initial load)
    useEffect(() => {
        if (hasShownInitialLoading) {
            setIsLoading(true)
            
            // Small delay to ensure smooth transition
            const timer = setTimeout(() => {
                // Auto-complete loading after a reasonable time for navigation
                setIsLoading(false)
            }, 2000)

            return () => clearTimeout(timer)
        }
    }, [location.pathname, hasShownInitialLoading])

    const completeLoading = () => {
        setIsLoading(false)
        setHasShownInitialLoading(true)
    }

    const startLoading = () => {
        setIsLoading(true)
    }

    return (
        <LoadingContext.Provider value={{
            isLoading,
            completeLoading,
            startLoading,
            hasShownInitialLoading
        }}>
            {children}
        </LoadingContext.Provider>
    )
}
