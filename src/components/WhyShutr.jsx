import '../styles/whyshutr.css'
import GuyOne from '../assets/shutr/guy-1.jpg'
import Cloud from '../assets/shutr/cloud.jpg'
import LightSunset from '../assets/shutr/light-sunset.jpg'
import ImageWithSkeleton from './ImageWithSkeleton'

export default function WhyShutr () {
    return (
        <>
            <h1 className='title'>Why Shutr</h1>

            <div className='cards'>
                {/* Card 1 */}
                <input type="radio" id='radio-1' name='radio-card' defaultChecked />
                <article className='card' style={{'--angle': '4deg'}}>
                    <ImageWithSkeleton
                        src={GuyOne}
                        alt="Potrait"
                        className='card-img'
                        skeletonClassName="card-skeleton"
                    />

                    <div className="card-data">
                        <span className='card-num'>1/3</span>
                        <h2>Potraits with Personality</h2>
                        <p>From studio to natural light, we shoot people, not poses.</p>

                        <footer>
                            <label htmlFor="radio-3" aria-label='Previous'>&#10094;</label>
                            <label htmlFor="radio-2" aria-label='Next'>&#10095;</label>
                        </footer>
                    </div>
                </article>

                {/* Card 2 */}
                <input type="radio" id='radio-2' name='radio-card' />
                <article className='card' style={{'--angle': '-8deg'}}>
                    <ImageWithSkeleton
                        src={Cloud}
                        alt="Landscape"
                        className='card-img'
                        skeletonClassName="card-skeleton"
                    />

                    <div className='card-data'>
                        <span className='card-num'>2/3</span>
                        <h2>Landscape with Soul</h2>
                        <p>Sweeping shots that hold stillness, motion and mood.</p>

                        <footer>
                            <label htmlFor="radio-1" aria-label='Previous'>&#10094;</label>
                            <label htmlFor="radio-3" aria-label='Next'>&#10095;</label>
                        </footer>
                    </div>
                </article>

                {/* Card 3 */}
                <input type="radio" id='radio-3' name='radio-card' />
                <article className='card' style={{'--angle': '-7deg'}}>
                    <ImageWithSkeleton
                        src={LightSunset}
                        alt="Light Sunset"
                        className='card-img'
                        skeletonClassName="card-skeleton"
                    />

                    <div className='card-data'>
                        <span className='card-num'>3/3</span>
                        <h2>Expert Edits</h2>
                        <p>Submit your raw shots, we'll bring them to life.</p>

                        <footer>
                            <label htmlFor="radio-2" aria-label='Previous'>&#10094;</label>
                            <label htmlFor="radio-1" aria-label='Next'>&#10095;</label>
                        </footer>
                    </div>
                </article>
            </div>
        </>
    )
}