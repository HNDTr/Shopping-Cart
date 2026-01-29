import NavBar from "./components/Navigation/NavBar";
import { useState, useEffect } from "react";
import { Outlet } from "react-router";
// import games from "./data/games.json";

function App(){
  const [topTripleA, setTopTripleA] = useState([]);
  const [topRated, setTopRated] = useState([])
  const [stores, setStores] = useState([])

  
  useEffect(() => {
    const fetchTopGamesDeals = async() => {
      try {
        const res = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=2&AAA=1');
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();

        const uniqueGame = new Set(); 
        const result = [];
        let groupGame = [];

        data.forEach(game => {
          if (uniqueGame.size < 10) {
            if (!uniqueGame.has(game.internalName || game.title)) {
              uniqueGame.add(game.internalName || game.title)
              groupGame.push({
                thumb: game.thumb,
                title: game.title,
                gameId: game.gameID
              })
              if (groupGame.length === 5) {
                result.push(groupGame)
                groupGame = [];
              }
            }
          }
        })


        setTopTripleA(result);
      } catch(err) {
        console.error("Error fetching games:", err);
      }
    }
    fetchTopGamesDeals();
  }, [])


  useEffect(() => {
    const fetchTopRatedGames = async () => {
      try {
      const res = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=3&steamRating=80')
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      const uniqueGame = new Set(); 
      const result = [];
      // let groupGame = [];

      data.forEach(game => {
        if (uniqueGame.size < 10) {
          if (!uniqueGame.has(game.internalName || game.title)) {
            uniqueGame.add(game.internalName || game.title)
            result.push({
              thumb: game.thumb,
              title: game.title,
              salePrice: game.salePrice,
              gameId: game.gameID
            })
          }
        }
      })


      setTopRated(result)
      }
      catch(err) {
         console.error("Error fetching games:", err);
      }
    }
    fetchTopRatedGames();
  }, [])

  useEffect(() => {
    const fetchStores = async () => {
      try {
      const res = await fetch('https://www.cheapshark.com/api/1.0/stores')
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      const result = [];

      data.forEach(store => {
        result.push(store)
      })

      setStores(result)
      }
      catch(err) {
         console.error("Error fetching game stores:", err);
      }
    }
    fetchStores();
  }, [])


  return (
    <>
      <NavBar></NavBar>
      <main>
        <Outlet context={{topTripleA, topRated, stores}}></Outlet>
      </main>
    </>
  )
}

export default App