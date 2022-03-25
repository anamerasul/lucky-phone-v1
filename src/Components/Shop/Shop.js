import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const[products ,setProducts]=useState([])

    useEffect(()=>{
        fetch(`PhoneFakedata.json`)
        .then(res=>res.json())
        .then(product=>setProducts(product.data))
    },[])


    return (
        <div className="container-fluid">
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 col-lg-9 col-12 order-2 order-md-1">
                    <div className="container py-3 my-2">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                            {
                                    products.map(product =>
                                            <Product
                                            key={product.id}
                                            product={product}
                                            ></Product>)
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 col-12 order-sm-1 order-md-2">
                    <div className="container py-3 my-2">
            <div id="cart">
                <Cart></Cart>
            </div>
            </div>
                    </div>
                </div>
            </div>





            
        </div>
    );
};

export default Shop;