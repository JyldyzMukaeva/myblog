import React from 'react';
import {useParams} from "react-router-dom";
import {iphone} from "../../constants/iphone";
import styles from "./Product.module.css";

const title = {
    textAlign:"center"
}
const Product = () => {
    const params = useParams();
    const product = iphone.find(item => item._id === +params.id)



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