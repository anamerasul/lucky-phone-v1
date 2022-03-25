import React, { useEffect } from 'react';
import './Shop.css'

const Shop = () => {

    useEffect(()=>{
        fetch(`PhoneFakedata.json`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])


    return (
        <div>
            <h1>SHOP</h1>
        </div>
    );
};

export default Shop;