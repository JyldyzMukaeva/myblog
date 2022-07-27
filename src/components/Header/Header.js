import React from 'react';
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <ul>
                <li><a href="/">Главная</a></li>
                <li><a href="/about">О нас</a></li>
                <li><a href="/contacts">Контакты</a></li>
                <li><a href="/address">Адрес</a></li>
                {/*<li><a href="/products">Продукты</a></li>*/}
                <li><a href="/catalog/iphone">Iphone</a></li>
                <li><a href="/catalog/MacBook">MacBook</a></li>


            </ul>
        </div>
    );
};

export default Header;