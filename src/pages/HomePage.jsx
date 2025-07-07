import '../styles/home.css'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'

export default function HomePage() {
    return (
        <>
            <NavBar />
            <section id='hero'>
                <Hero />
            </section>
            <section id='about'></section>
        </>
    )
}