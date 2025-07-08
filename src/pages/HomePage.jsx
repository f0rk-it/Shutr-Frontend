import '../styles/home.css'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import WhyShutr from '../components/WhyShutr'
import Pricing from '../components/Pricing'

export default function HomePage() {
    return (
        <>
            <NavBar />
            <section id='hero'>
                <Hero />
            </section>

            <section id='why-shutr'>
                <WhyShutr />
            </section>

            <section id='pricing'>
                <Pricing />
            </section>
        </>
    )
}