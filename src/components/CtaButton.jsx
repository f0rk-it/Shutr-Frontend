import '../styles/ctabutton.css'

export default function CtaButton ({ text, className }) {
    return (
        <button className={`cta-button ${className || ''}`}>{text}</button>
    )
}