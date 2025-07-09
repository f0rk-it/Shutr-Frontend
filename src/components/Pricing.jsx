import '../styles/pricing.css'
import CtaButton from './CtaButton'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { FiGithub } from 'react-icons/fi'
import { FaXTwitter, FaWhatsapp } from 'react-icons/fa6'

export default function Pricing() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-out',
            once: false,
            offset: 120
        })
    }, [])

    const handleWhatsAppRedirect = (serviceName) => {
        const phoneNumber = "+2348064189608"
        let message = ""
        
        switch(serviceName) {
            case "Portrait Session":
                message = "Hi! I'm interested in booking a Portrait Session (₦10,000). Could you please provide more details about availability and booking process?"
                break
            case "Couple/Family Session":
                message = "Hi! I'm interested in booking a Couple/Family Session (₦15,000). Could you please provide more details about availability and booking process?"
                break
            case "Photo Editing Only":
                message = "Hi! I'm interested in your Photo Editing service (₦5,000). Could you please provide more details about the submission process and requirements?"
                break
            default:
                message = "Hi! I'm interested in your photography services. Could you please provide more information?"
        }
        
        const whatsappURL = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`
        window.open(whatsappURL, '_blank')
    }

    const pricingTiers = [
        {
            name: "Portrait Session",
            price: "₦10,000",
            duration: "1 hour shoot",
            features: [
                "5-10 edited high-res photos",
                "1 outfit change",
                "Delivery in 2-3 days",
                "Professional lighting setup",
                "Basic retouching included"
            ],
            popular: false
        },
        {
            name: "Couple/Family Session",
            price: "₦15,000",
            duration: "1.5-2 hour shoot",
            features: [
                "10-15 edited images",
                "2 outfit changes",
                "Delivery in 4-5 days",
                "Multiple location options",
                "Advanced color grading"
            ],
            popular: true
        },
        {
            name: "Photo Editing Only",
            price: "₦5,000",
            duration: "Digital service",
            features: [
                "Up to 5 photos",
                "Skin retouching",
                "Color grading",
                "24-48 hour turnaround",
                "High-resolution delivery"
            ],
            popular: false
        }
    ]

    return (
        <section className="pricing-section">
            <div className="pricing-header">
                <h2 className="pricing-title">Investment in Memories</h2>
                <p className="pricing-subtitle">Choose the package that captures your vision</p>
            </div>

            <div className="pricing-grid">
                {pricingTiers.map((tier, index) => (
                    <div key={index} className={`pricing-card ${tier.popular ? 'popular' : ''}`} data-aos="fade-up" data-aos-delay={`${index * 200}`}>
                        {tier.popular && <div className="popular-badge">Most Popular</div>}
                        
                        <div className="pricing-header-content">
                            <h3 className="tier-name">{tier.name}</h3>
                            <div className="price-container">
                                <span className="price">{tier.price}</span>
                                <span className="duration">{tier.duration}</span>
                            </div>
                        </div>

                        <div className="features-list">
                            {tier.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="feature-item">
                                    <span className="feature-icon">✓</span>
                                    <span className="feature-text">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pricing-cta">
                            <CtaButton 
                                text={tier.name === "Photo Editing Only" ? "Upload Photos" : "Book Session"} 
                                className="pricing-btn"
                                onClick={() => handleWhatsAppRedirect(tier.name)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <footer className='footer'>
                <p>© {new Date().getFullYear()} Shutr • Built by f0rk_it🌵</p>

                <div className='social_icons'>
                    <a href="https://github.com/f0rk-it" target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
                        <FiGithub className='icon' />
                    </a>
                    <a href="https://x.com/f0rk_it" target='_blank' rel='noopener noreferrer' aria-label='Twitter/X'>
                        <FaXTwitter className='icon' />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=2349132135506" target='_blank' rel='noopener noreferrer' aria-label='WhatsApp'>
                        <FaWhatsapp className='icon' />
                    </a>
                </div>
            </footer>
        </section>
    )
}