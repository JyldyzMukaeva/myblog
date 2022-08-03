import React from 'react';
import style from "./Iwatch.module.css";
import {iphone} from "../..constants/iphone";
import {NavLink} from "react-router-dom";

const Iwatch = () => {
    return (
        <div className={style.iphones}>
            {iphone.map(p => <div className={style.iphone}>
                <NavLink to={`/product/iphone/${p.id}`}><img src={p.img} alt=""/></NavLink>
                <h5>{p.name}</h5>
                <span>{p.price}</span>
                <NavLink to={`/product/iphone/${p.id}`}>Добавить в корзину</NavLink>
            </div>)}

        </div>
    );
};

export default Iwatch;