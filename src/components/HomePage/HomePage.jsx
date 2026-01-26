import SlideShow from "../SlideShow/SlideShow"
import DealsColumn from "../dealsColumn/DealsColumn";
import styles from "../HomePage/HomePage.module.css"
import { useOutletContext } from "react-router"


function HomePage(){
    const {topTripleA, topRated} = useOutletContext();
    // console.log(top5ATriple)

    return (
        <div>
            <SlideShow topGames={topTripleA}></SlideShow>
            <div className={styles.columnsContainer}>
                <DealsColumn deals={topRated}></DealsColumn>
                <DealsColumn deals={topRated}></DealsColumn>
            </div>
        </div>
    )
}

export default HomePage