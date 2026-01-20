// import styles from '../SlideShow/SlideShow.module.css'
import { useState } from 'react'

function SlideShow({top10Games}){
    const [slideIndex, setSlideIndex] = useState(0);

    
    const nextSlide = () => {
        setSlideIndex((prev) => ((slideIndex !== top10Games.length - 1) ? prev + 1 : 0))
    }


    const prevSlide = () => {
        setSlideIndex((prev) => ((prev !== 0) ? prev - 1 : (top10Games.length - 1)))
    }

    console.log(slideIndex)
    


    return (
        <div>
            <button onClick={prevSlide}>&#10094;</button>
            {top10Games.map((game, index) => 
                <div key={game.gameId} style={{display: index === slideIndex ? "block" : "none"}}>
                    <img src={game.thumb} alt={game.title}/>
                    <p>{game.title}</p>
                </div>
            )}
            <button onClick={nextSlide}>&#10095;</button>
        </div>
    )
}

export default SlideShow