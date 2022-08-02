import React from 'react';
import {useParams} from "react-router-dom";
import {iphones} from "../../constants/iphones";
import styles from "./Product.module.css";

const title = {
    textAlign:"center"
}
const Product = () => {
    const params = useParams();
    const product = iphones.find(item => item.id === +params.id)


    return (

        <div className={styles.container}>

            <div>
                <img src={product.img} alt=""/>
            </div>

            <div className={styles.info}>
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
                <p>{product.description}</p>
            </div>

        </div>

    );
};

export default Product;