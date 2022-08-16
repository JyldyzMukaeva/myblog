import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import s from "./Cart.module.css";

    const Cart = () => {
        const [goods, setGoods] = useState([])

        /******************* Обработчики ********************/

            const changeCount = (e,data) => {
            const goods = JSON.parse(localStorage.getItem("cart"));
            goods[data.id].count = +e.currentTarget.value;
            localStorage.setItem("cart", JSON.stringify(goods));
            getProducts();
        }

        /*************************** -----------------*********************/

        const getTotalSum = () => {
            return goods.reduce((sum, item) => {
                if(item.currency === "$"){
                    return sum + (item.count * (item.price *85));
                }
                return sum + (item.count * item.price);
            }, 0)
        }

        // let sum = goods.reduce((prev, item) => {return prev + (item.count * item.price)},0)

        const getProducts = () => {
            const goods = JSON.parse(localStorage.getItem("cart"));
            setGoods(Object.values(goods))
        }

        useEffect(getProducts, []);
        return (
            <div className={s.container}>
                <h1>Корзина</h1>
                <table className={s.table}>
                    <tr>
                        <td colSpan="2">Продукт</td>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>К оплате</th>
                    </tr>


                    {
                        goods.map(item => {
                            return (
                                <tr>
                                    <td><img src={item.img} alt=""/></td>
                                    <td>{item.name}</td>
                                    <td>{item.price} {item.currency}</td>
                                    <td><input onChange={e => changeCount(e,item)} type="number" defaultValue={item.count}/></td>
                                    <td>{item.count * item.price} {item.currency}</td>

                                </tr>
                            )
                        })
                    }
                    {/*<tr>*/}
                    {/*    <td colSpan="3"></td>*/}
                    {/*    <td>Итого:</td>*/}
                    {/*    <td>{sum}</td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <td colSpan="4"></td>*/}
                    {/*    <td colSpan={2}><button>Оформить заказ</button></td>*/}
                    {/*</tr>*/}
                </table>
                <div className={s.container2}>
                    <h2>Итоговая сумма: <span>{getTotalSum()}</span><span>сом</span></h2>
                    <Link to="/checkout"><button>Оформить заказ</button></Link>
                </div>
            </div>


    );
    };


    export default Cart;