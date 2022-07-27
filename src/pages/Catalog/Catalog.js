import React from 'react';
import {Outlet} from "react-router-dom";


const Catalog = () => {

    const title = {
        textAlign:"center"
    }
    return (
        <div>
            <h1 style={title}>Catalog</h1>
            <Outlet/>
        </div>
    );
};

export default Catalog;