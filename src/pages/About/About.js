import React from "react";
import styles from "./About.module.css";

const About = (data) => {

    return(
        <div className={styles.about}>
            <h1>{data.text}</h1>
        </div>
    )
}

export default About;