import React from 'react';
import style from "./Iphone.module.css";
import {iphone} from "../../constants/iphone";
import {NavLink} from "react-router-dom";

const Iphone = () => {

    const title = {
        textAlign:"center"
    }
    return (
        <div className={style.iphones}>
            {
                iphone.map(p =>
                    <div className={style.iphone}>
                        <NavLink to={`/product/${p.id}`}><img src={p.img} alt=""/></NavLink>
                        <h5>{p.name}</h5>
                        <span>{p.price}</span>
                        <NavLink to={`/product/${p.id}`}>Добавить в корзину</NavLink>
                    </div>)
            }
        </div>
    );
};

export default Iphone;