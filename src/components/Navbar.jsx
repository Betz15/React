import { Link } from "react-router-dom";
import styles from "./styles/navbar-style.module.css"


export default function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link className={styles["link-styles"]} to="/">Home</Link>
                </li>
                <li>
                    <Link className={styles["link-styles"]} to="/Owner">Owner</Link>
                </li>
                <li>
                    <Link className={styles["link-styles"]} to="/Productos">Menu</Link>
                </li>
            </ul>
        </nav>
    )
}