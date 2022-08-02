import React from 'react';
import {useParams} from "react-router-dom";

const title = {
    textAlign:"center"
}
const Product = () => {
    const params = useParams();

    return (
        <div>
            <h1 style={title}>Это страничка продукта: {params.name}</h1>
            {/*img*/}
            {/*price*/}
            {/*description*/}
        </div>
    );
};

export default Product;