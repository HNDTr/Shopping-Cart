function SlideShow({top5Games}){
    // console.log(top5Games)
    return (
        <div>
            {top5Games.map(game => 
                <div key={game.gameId}>
                    <img src={game.thumb} alt={game.title} />
                    <p>{game.title}</p>
                </div>
            )}
        </div>
    )
}

export default SlideShow