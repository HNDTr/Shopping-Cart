import styles from '../Navigation/NavBar.module.css';
import { Link } from "react-router";
import { IoCartOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";



function NavBar(){
    return (
        <div className={styles.container}>
            <Link className={styles.link}>
                <div className={styles["header-container"]}>
                    <IoGameControllerOutline className={styles.logoIcon}/>
                    <h2>Gamer Paradise</h2>
                </div>
            </Link>
            <div className={styles.searchBarContainer}>
                <input type="text" />
                <CiSearch className={styles.searchIcon}/>
            </div>
            <div className={styles.cartContainer}>
                <Link className={styles.link}><h2>List</h2></Link>
                <Link className={styles.link}><IoCartOutline className={styles.cartIcon}/></Link>
            </div>
        </div>
    );
}

export default NavBar