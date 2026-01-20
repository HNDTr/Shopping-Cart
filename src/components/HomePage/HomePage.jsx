import SlideShow from "../SlideShow/SlideShow"
import { useOutletContext } from "react-router"

function HomePage(){
    const {top10TripleA} = useOutletContext();
    // console.log(top5ATriple)

    return (
        <div>
            <SlideShow top10Games={top10TripleA}></SlideShow>
        </div>
    )
}

export default HomePage