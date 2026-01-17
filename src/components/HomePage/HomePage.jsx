import SlideShow from "../SlideShow/SlideShow"
import { useOutletContext } from "react-router"

function HomePage(){
    const {top5TripleA} = useOutletContext();
    // console.log(top5ATriple)

    return (
        <div>
            <SlideShow top5Games={top5TripleA}></SlideShow>
        </div>
    )
}

export default HomePage