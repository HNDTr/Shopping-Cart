import { useEffect, useState } from "react"
import { useParams, useOutletContext } from "react-router-dom";
import styles from '../GamePage/GamePage.module.css'

function GamePage(){
    const [currentGame, setCurrentGame] = useState();
    const {stores, addToCart} = useOutletContext();
    const {id} = useParams()
    
    useEffect(() => {
        const fetchGame = async () => {
            try {
                const res = await fetch(`https://www.cheapshark.com/api/1.0/games?id=${id}`)
                if (!res.ok) throw new Error("Network response was not ok")
                const data = await res.json();
                console.log(data)
                setCurrentGame(data)
            } catch (err){
                console.error("Error fetching games:", err);
            }
        }
        fetchGame();
    }, [id])

    if (!currentGame) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.gamePageContainer}>
            <div className={styles.thumbTitleContainer}>
                <div>
                    <img src={currentGame.info.thumb} alt="" />
                </div>
                <div>
                    <h1>{currentGame.info.title}</h1>
                    <h2>Historical Low</h2>
                    <h3>${currentGame.cheapestPriceEver.price}</h3>
                </div>
            </div>
            <div>
                {currentGame.deals.map((deal) => (
                    <div className={styles.storeDealContainer}>
                        <div className={styles.storeTitleContainer}> 
                            <div>
                                <h1 className="storeName">{stores[deal.storeID - 1].storeName}</h1>
                                <img src={`https://www.cheapshark.com${stores[deal.storeID - 1].images.banner}`} alt="Store's banner" />
                            </div>
                            <h2>-{Math.round(deal.savings)}%</h2>
                        </div>
                        <div >
                            <div className={styles.priceContainer}>
                                <h5 className={styles.retailPrice}>${deal.retailPrice}</h5>
                                <h1 className={styles.salesPrice}>${deal.price}</h1>
                            </div>
                            
                            <button onClick={() => addToCart({
                              title: currentGame.info.title,
                              price: deal.price,
                              retailPrice: deal.retailPrice,
                              storeID: deal.storeID,
                              thumb: currentGame.info.thumb
                            })}>Add To Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GamePage