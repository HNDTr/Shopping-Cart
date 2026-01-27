import { useEffect, useState } from "react"
import { useParams } from "react-router";

function GamePage(){
    const [currentGame, setCurrentGame] = useState();
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
        <div>
            <h1>{currentGame.info.title}</h1>
        </div>
    )
}

export default GamePage