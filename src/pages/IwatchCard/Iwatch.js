import React from 'react';
import style from "./Iwatch.module.css";
import {watch} from "../../constants/iwatch";
import {NavLink} from "react-router-dom";

const Watch = () => {
    return (
        <div className={style.watches}>
            {
                watch.map(p => <div className={style.watch}>
                <NavLink to={`/goods/${p.id}`}><img src={p.img} alt=""/></NavLink>
                <h5>{p.name}</h5>
                <span>{p.price}</span>
                <NavLink to={`/goods/${p.id}`}>Добавить в корзину</NavLink>
            </div>)}

        </div>
    );
};

export default Watch;