import '../styles/hero.css'
import IsaacOne from '../assets/shutr/isaac-1.jpg'
import IsaacTwo from '../assets/shutr/isaac-2.jpg'
import IsaacThree from '../assets/shutr/isaac-3.jpg'
import IsaacFour from '../assets/shutr/isaac-4.jpg'
import CtaButton from './CtaButton'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <>
            <div className='hero-text'>
                <h1 className='headline'>Shutr. Not Just Photos.</h1>
                <p className='subheading'>Built for moments that deserve more.</p>

                <div className='cta-links'>
                    <Link to='/book'>
                        <CtaButton text='Book A Session' className='book-a-session-btn' />
                    </Link>

                    <Link to='/gallery'>
                        <CtaButton text='Explore Gallery' className='explore-portfolio-btn' />
                    </Link>
                </div>
            </div>

            <div className='hero-carousel'>
                <img src={IsaacOne} alt="Isaac Shots" />
                <img src={IsaacTwo} alt="Isaac Shots" />
                <img src={IsaacThree} alt="Isaac Shots" />
                <img src={IsaacFour} alt="Isaac Shots" />
            </div>
        </>
    )
}