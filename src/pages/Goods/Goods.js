import React from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {watch} from "../../constants/iwatch";
import styles from "./Goods.module.css";

const title = {
    textAlign:"center"
}
const Goods = () => {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams()
    const goods = watch.find(item => item.id === +params.id)




    return (

        <div className={styles.container}>

            <div>
                <img src={goods.img} alt=""/>
            </div>

            <div className={styles.info}>
                <h2>{goods.name}</h2>
                <h3>{goods.price}</h3>
                <p>{goods.description}</p>
                <p className={styles.quantity_status}>
                    {+searchParams.get("quantity") === 0 ? "out of stock" : "in stock"}
                </p>
                <p>
                    {searchParams.get("memory")}
                </p>
            </div>

        </div>

    );
};

export default Goods;