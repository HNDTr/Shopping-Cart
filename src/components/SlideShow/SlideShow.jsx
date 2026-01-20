// import styles from '../SlideShow/SlideShow.module.css'
import { useState } from 'react'

function SlideShow({topGames}){
    const [slideIndex, setSlideIndex] = useState(0);

    
    const nextSlide = () => {
        setSlideIndex((prev) => ((slideIndex !== topGames.length - 1) ? prev + 1 : 0))
    }


    const prevSlide = () => {
        setSlideIndex((prev) => ((prev !== 0) ? prev - 1 : (topGames.length - 1)))
    }

    return (
        <div>
            <button onClick={prevSlide}>&#10094;</button>
            {topGames.map((games, index) => 
                <div style={{display: index === slideIndex ? "block" : "none"}}>
                   {games.map((game) => 
                    <div key={game.gameId}>
                            <img src={game.thumb} alt={game.title}/>
                            <p>{game.title}</p>
                    </div>
                   )}
                    {/* <img src={game.thumb} alt={game.title}/>
                    <p>{game.title}</p> */}
                </div>
            )}
            <button onClick={nextSlide}>&#10095;</button>
        </div>
    )
}

export default SlideShow