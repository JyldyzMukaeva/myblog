import React from 'react';
import {Link, Outlet} from "react-router-dom";


const Catalog = () => {

    const title = {
        textAlign:"center"
    }
    return (
        <div>
            <h1 style={title}>Catalog</h1>
            <ul>
                <li><Link to="/product/iphone-13-pro">Iphone 13 pro</Link></li>
                <li><Link to="/product/iphone-13-pro-max">Iphone 13 pro max</Link></li>
                <li><Link to="/product/iphone-13">Iphone 13</Link></li>
                <li><Link to="/product/iphone-12">Iphone 12</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default Catalog;