import styles from "../dealsColumn/DealsColumn.module.css"
import { Link } from "react-router"

function DealsColumn({deals}) {
    // console.log(deals)
    return (
        <div className={styles.mainContainer}>
            {deals.map((game) => (
                
                <Link key={game.gameId} className={styles.gameContainer} to={`/game/${game.gameId}`}>
                    <div className={styles.imgContainer}>
                        <img src={game.thumb} alt={game.title} className={styles.gameImg}/>
                    </div>
                    <div className={styles.infoContainer}>
                        <div>
                            <h5>{game.title}</h5>
                        </div>
                        <div>
                            <h3>${game.salePrice}</h3>
                        </div>
                    </div>
                </Link>
                // console.log(game)
            ))}
        </div>
    )
}


export default DealsColumn