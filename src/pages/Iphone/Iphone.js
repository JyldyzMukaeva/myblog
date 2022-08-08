import React, {useEffect, useState} from 'react';
import toast from "react-hot-toast";
import s from "./Iphone.module.css";
import style from "./Iphone.module.css";
import {iphone} from "../../constants/iphone";
import {NavLink} from "react-router-dom";

const Iphone = () => {

    const title = {
        textAlign:"center"
    }
    const [iphone, setIphones] = useState([])

    const getIphones = () => {
        fetch("http://localhost:3001/iphones")
            .then(response => {
                if (response.status === 200){
                    return response.json();
                } else {
                    toast.error("Произошла ошибка. Статус ошибки: \" + response.status")
                }
            })
            .then (data => setIphones(data))
    }

    useEffect(() => {
        getIphones();
    },
        []);



    return (
        // <div className={style.iphones}>
        //     {
        //         iphone.map(p =>
        //             <div className={style.iphone}>
        //                 <NavLink to={`/product/${p.id}`}><img src={p.img} alt=""/></NavLink>
        //                 <h5>{p.name}</h5>
        //                 <span>{p.price}</span>
        //                 <NavLink to={`/product/${p.id}`}>Добавить в корзину</NavLink>
        //             </div>)
        //     }
        // </div>

        <div>
            <h1 style={title}>Iphones</h1>
            <div className={s.product_container}>

                {
                    iphone.map(item => {
                        return (
                            <div className="product_card">
                                <img src={item.img}/>
                                <h3>{item.name}</h3>
                                <h4>{item.price}</h4>
                                <button>Buy</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Iphone;