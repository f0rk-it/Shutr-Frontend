import '../styles/navbar.css'
import Logo from '../assets/logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import CtaButton from './CtaButton'

export default function NavBar () {
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()
    const logoRef = useRef(null)
    
    // Determine if we're on the gallery page
    const isGalleryPage = location.pathname === '/gallery'

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (logoRef.current) {
            gsap.to(logoRef.current, {
                y: -8,
                duration: 1.2,
                ease: 'power2.inOut',
                repeat: -1,
                yoyo: true
            })
        }
    }, [])

    return (
        <nav id='navbar' className={isScrolled ? 'navbar scrolled': 'navbar'}>
            <div className='navbar-left'>
                <Link to='/'>
                    <img ref={logoRef} src={Logo} alt="Shutr Logo" className='navbar-logo' />
                    <span className='navbar-brand'>Shutr</span>
                </Link>
            </div>

            <div className='navbar-right'>
                <Link data-aos="fade-left" to={isGalleryPage ? '/' : '/gallery'}>
                    <CtaButton 
                        text={isGalleryPage ? 'Go Back Home' : 'Explore Gallery'} 
                        className='navbar-btn' 
                    />
                </Link>
            </div>
        </nav>
    )
}