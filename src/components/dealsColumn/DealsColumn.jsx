import styles from "../dealsColumn/DealsColumn.module.css"

function DealsColumn({deals}) {
    // console.log(deals)
    return (
        <div className={styles.mainContainer}>
            {deals.map((game) => (
                
                <div key={game.gameId} className={styles.gameContainer}>
                    <div className={styles.imgContainer}>
                        <img src={game.thumb} alt={game.title} />
                    </div>
                    <div className={styles.infoContainer}>
                        <div>
                            <h5>{game.title}</h5>
                        </div>
                        <div>
                            <h3>${game.salePrice}</h3>
                        </div>
                    </div>
                </div>
                // console.log(game)
            ))}
        </div>
    )
}


export default DealsColumn