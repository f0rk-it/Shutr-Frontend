import '../styles/navbar.css'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CtaButton from './CtaButton'

export default function NavBar () {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav id='navbar' className={isScrolled ? 'navbar scrolled': 'navbar'}>
            <div className='navbar-left'>
                <Link to='/'>
                    <img src={Logo} alt="Shutr Logo" className='navbar-logo' />
                    <span className='navbar-brand'>Shutr</span>
                </Link>
            </div>

            <div className='navbar-right'>
                <Link to='/gallery'>
                    <CtaButton text='Explore Gallery' className='navbar-btn' />
                </Link>
            </div>
        </nav>
    )
}