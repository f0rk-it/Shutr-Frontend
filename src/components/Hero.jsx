import '../styles/hero.css'
import IsaacOne from '../assets/shutr/isaac-1.jpg'
import IsaacTwo from '../assets/shutr/isaac-2.jpg'
import IsaacThree from '../assets/shutr/isaac-3.jpg'
import IsaacFour from '../assets/shutr/isaac-4.jpg'
import CtaButton from './CtaButton'
import ImageWithSkeleton from './ImageWithSkeleton'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <>
            <div className='hero-text'>
                <h1 className='headline'>Shutr. Not Just Photos.</h1>
                <p className='subheading'>Built for moments that deserve more.</p>

                <div className='cta-links'>
                    <a href='#pricing'>
                        <CtaButton text='Book A Session' className='book-a-session-btn' />
                    </a>

                    <Link to='/gallery'>
                        <CtaButton text='Explore Gallery' className='explore-portfolio-btn' />
                    </Link>
                </div>
            </div>

            <div className='hero-carousel'>
                <ImageWithSkeleton
                    src={IsaacOne}
                    alt="Isaac Shots"
                    className="hero-carousel-img"
                    skeletonClassName="hero-skeleton"
                />
                <ImageWithSkeleton
                    src={IsaacTwo}
                    alt="Isaac Shots"
                    className="hero-carousel-img"
                    skeletonClassName="hero-skeleton"
                />
                <ImageWithSkeleton
                    src={IsaacThree}
                    alt="Isaac Shots"
                    className="hero-carousel-img"
                    skeletonClassName="hero-skeleton"
                />
                <ImageWithSkeleton
                    src={IsaacFour}
                    alt="Isaac Shots"
                    className="hero-carousel-img"
                    skeletonClassName="hero-skeleton"
                />
            </div>
        </>
    )
}