import React from "react";
import styles from "./Main.module.css";

const Main = (props) => {
    return (
        <div className={styles.main}>
            <h1>Главная страница</h1>
            <p>{props.pageName}</p>
        </div>
    )
}

export default Main;