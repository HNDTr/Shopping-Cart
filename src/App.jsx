import NavBar from "./components/Navigation/NavBar";
import { useState, useEffect } from "react";
import { Outlet } from "react-router";
// import games from "./data/games.json";

function App(){
  const [top5TripleA, setTop5TripleA] = useState([]);

  
  useEffect(() => {
    const fetchTopGamesDeals = async() => {
      try {
        const res = await fetch('https://www.cheapshark.com/api/1.0/deals?AAA=1');
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();

        const uniqueGame = new Set(); 
        const result = [];

        data.forEach(game => {
          if (uniqueGame.size < 5) {
            if (!uniqueGame.has(game.internalName || game.title)) {
              uniqueGame.add(game.internalName || game.title)
              result.push({
                thumb: game.thumb,
                title: game.title,
                gameId: game.gameID
              })
            }
          }
        })


        setTop5TripleA(result);
        console.log(top5TripleA)
      } catch(err) {
        console.error("Error fetching games:", err);
      }
    }
    fetchTopGamesDeals();
  }, [])


  return (
    <>
      <NavBar></NavBar>
      <main>
        <Outlet context={{top5TripleA}}></Outlet>
      </main>
    </>
  )
}

export default App