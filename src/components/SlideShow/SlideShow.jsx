import styles from '../SlideShow/SlideShow.module.css'
import { Link } from "react-router-dom";
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
                <div key={index} style={{display: index === slideIndex ? "flex" : "none"}} className={styles.slideContainer}>
                   {games.map((game) => 
                    <Link key={game.gameId} className={styles.gameItem} to={`/game/${game.gameId}`}>
                        <img src={game.thumb} alt={game.title} className={styles.gameImg}/>
                        <div className={styles.gameTitleContainer}>
                            <p>{game.title}</p>
                        </div>
                    </Link>
                   )}
                </div>
            )}
            <button onClick={nextSlide}>&#10095;</button>
        </div>
    )
}

export default SlideShow