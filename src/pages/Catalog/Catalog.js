import React from 'react';
import styles from "./Catalog.module.css";
import {NavLink} from "react-router-dom";


const Catalog = () => {

    const title = {
        textAlign:"center"
    }
    return (
        <>
            <h1 style={title}>Catalog</h1>
            <div className={styles.container}>
               <div className={styles.catalog_card}>
                   <NavLink to="/catalog/iphone">
                   <img src="https://istore.kg/media/category/iphones.webp" alt=""/>
                   <h2>Iphone</h2>
                   </NavLink>
               </div> 
                <div className={styles.catalog_card}>
                    <img src="https://istore.kg/media/category/watches.webp" alt=""/>
                    <h2>Watch</h2>
                </div>
            </div>
        </>
    );
};

export default Catalog;