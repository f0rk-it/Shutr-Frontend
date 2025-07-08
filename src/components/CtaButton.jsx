import '../styles/ctabutton.css'

export default function CtaButton ({ text, className, onClick }) {
    return (
        <button className={`cta-button ${className || ''}`} onClick={onClick}>{text}</button>
    )
}