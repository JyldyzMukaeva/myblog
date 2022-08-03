import React from 'react';
import styles from "./Catalog.module.css";


const Catalog = () => {

    const title = {
        textAlign:"center"
    }
    return (
        <>
            <h1 style={title}>Catalog</h1>
            <div className={styles.container}>
               <div className={styles.catalog_card}>
                   <img src="https://istore.kg/media/category/macs_GvfhGiG.webp" alt=""/>
                   <h2>Mac</h2>
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