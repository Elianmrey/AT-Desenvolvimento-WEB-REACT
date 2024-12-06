import { Link } from "react-router-dom";
import img404 from "../../assets/img/404.png";
import styles from "./StyleNotFound.module.scss";
export default function Notfound() {
    return (<div className={styles.container}>
        <h1>Not Found</h1>
        <img src={img404} alt="404" className={styles.img404}/>
        <Link to="/">Home</Link>
    </div>
        
    )
}