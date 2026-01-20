import SlideShow from "../SlideShow/SlideShow"
import { useOutletContext } from "react-router"

function HomePage(){
    const {topTripleA} = useOutletContext();
    // console.log(top5ATriple)

    return (
        <div>
            <SlideShow topGames={topTripleA}></SlideShow>
        </div>
    )
}

export default HomePage