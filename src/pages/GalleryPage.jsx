import '../styles/gallerypage.css'
import NavBar from '../components/NavBar'
import Gallery from '../components/Gallery'

export default function GalleryPage() {
    return (
        <>
            <NavBar />

            <section id='gallery'>
                <Gallery />
            </section>
        </>
    )
}