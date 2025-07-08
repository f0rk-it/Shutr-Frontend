import '../styles/gallery.css'
import { useState } from 'react'

// Import all images
import Beach from '../assets/shutr/beach.jpg'
import Cloud from '../assets/shutr/cloud.jpg'
import DarkSunset from '../assets/shutr/dark-sunset.jpg'
import GuyOne from '../assets/shutr/guy-1.jpg'
import GuyTwo from '../assets/shutr/guy-2.jpg'
import IsaacOne from '../assets/shutr/isaac-1.jpg'
import IsaacTwo from '../assets/shutr/isaac-2.jpg'
import IsaacThree from '../assets/shutr/isaac-3.jpg'
import IsaacFour from '../assets/shutr/isaac-4.jpg'
import LightSunset from '../assets/shutr/light-sunset.jpg'
import RDarkSunset from '../assets/shutr/r-dark-sunest.jpg'
import Trees from '../assets/shutr/trees.jpg'

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null)

    const galleryImages = [
        { src: IsaacOne, alt: "Portrait Photography - Isaac Session 1", category: "Portrait" },
        { src: Beach, alt: "Landscape Photography - Beach Scene", category: "Landscape" },
        { src: GuyOne, alt: "Portrait Photography - Studio Session", category: "Portrait" },
        { src: Cloud, alt: "Landscape Photography - Cloud Formation", category: "Landscape" },
        { src: IsaacTwo, alt: "Portrait Photography - Isaac Session 2", category: "Portrait" },
        { src: DarkSunset, alt: "Landscape Photography - Dark Sunset", category: "Landscape" },
        { src: GuyTwo, alt: "Portrait Photography - Natural Light", category: "Portrait" },
        { src: Trees, alt: "Landscape Photography - Forest Scene", category: "Landscape" },
        { src: IsaacThree, alt: "Portrait Photography - Isaac Session 3", category: "Portrait" },
        { src: LightSunset, alt: "Landscape Photography - Golden Hour", category: "Landscape" },
        { src: IsaacFour, alt: "Portrait Photography - Isaac Session 4", category: "Portrait" },
        { src: RDarkSunset, alt: "Landscape Photography - Dramatic Sunset", category: "Landscape" }
    ]

    const openModal = (image) => {
        setSelectedImage(image)
        document.body.style.overflow = 'hidden' // Prevent background scrolling
    }

    const closeModal = () => {
        setSelectedImage(null)
        document.body.style.overflow = 'unset' // Restore scrolling
    }

    // Handle escape key to close modal
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            closeModal()
        }
    }

    return (
        <>
            <div className="gallery-container">
                <div className="gallery-header">
                    <h1 className="gallery-title">Our Gallery</h1>
                    <p className="gallery-subtitle">Moments captured, memories preserved</p>
                </div>

                <div className="masonry-grid">
                    {galleryImages.map((image, index) => (
                        <div 
                            key={index} 
                            className={`gallery-item item-${(index % 4) + 1}`}
                            onClick={() => openModal(image)}
                        >
                            <img 
                                src={image.src} 
                                alt={image.alt}
                                loading="lazy"
                            />
                            <div className="gallery-overlay">
                                <span className="category-tag">{image.category}</span>
                                <div className="view-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for expanded image view */}
            {selectedImage && (
                <div 
                    className="modal-overlay" 
                    onClick={closeModal}
                    onKeyDown={handleKeyDown}
                    tabIndex="0"
                >
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="close-button" 
                            onClick={closeModal}
                            aria-label="Close image"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        
                        <img 
                            src={selectedImage.src} 
                            alt={selectedImage.alt}
                            className="modal-image"
                        />
                        
                        <div className="modal-info">
                            <span className="modal-category">{selectedImage.category}</span>
                            <p className="modal-description">{selectedImage.alt}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}