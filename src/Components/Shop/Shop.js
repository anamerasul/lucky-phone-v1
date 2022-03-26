/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
// import { addToDb, getStoredCart } from '../../Utilities/FakeDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])

    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch(`PhoneFakedata.json`)
            .then(res => res.json())
            .then(product => setProducts(product))
    }, [])


    const handleAddtoCart = (sproduct) => {

        let newCart = []
        const exits = cart.find(product => product.id === sproduct.id)
        // console.log(cart.length)

        // handle cart item
        if (cart.length > 3) {
            return false;
        }
        if (!exits) {
            sproduct.quantity = 1
            newCart = [...cart, sproduct];
        }
        else {
            const restCart = cart.filter(product => product.id !== sproduct.id)
            exits.quantity = exits.quantity + 1
            newCart = [...restCart, exits]
        }

        setCart(newCart)
        // addToDb(sproduct.id)
    }

    // useEffect(() => {
    //     const storedCart = getStoredCart()
    //     const savedCart = []

    //     for (const id in storedCart) {
    //         const addedProduct = products.find(product => product.id === id)

    //         if (addedProduct) {
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity
    //             savedCart.push(addedProduct)
    //         }
    //     }
    //     setCart(savedCart)
    // }, [products])

    const [selectPhone, setSelectPhone] = useState([])

    const selected = (props) => {
        let selectedItem = props.data

        if (selectedItem.length !== 0) {
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
            selectedItem = selectedItem[(getRandomInt(4))]
            // if(selectedItem.length)
            setSelectPhone(selectedItem)
            // console.log()
        }

    }
    const resetItem = () => {
        setCart([])
        setSelectPhone([])
    }
    const [removeIt, setRemoveIt] = useState([])
    const removeItem = (props) => {
        // console.log(props.id)
        cart?.find(product => {
            if (product?.id === props.id) {
                cart.pop(product)
            }
        })
        removeIt.push(cart);
        setRemoveIt([...cart])
    }



    // const exits = cart.find(product => product.id === product.id

    return (
        <div className="container-fluid product-margin-top">
            <h2 className="text-center text-dark text-capitalize">Choose phone from here</h2>
            <div className="container-fluid new-postition">
                <div className="row">
                    <div className="col-md-8 col-lg-9 col-12 order-2 order-md-1">
                        <div className="container py-3 my-2">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                                {
                                    products.map(product =>
                                        <Product

                                            handleAddtoCart={handleAddtoCart}
                                            key={product.id}
                                            product={product}
                                        ></Product>)
                                }
                            </div>
                        </div>
                    </div>
                    <div id='cart' className="col-md-4 col-lg-3 col-12 order-1 order-md-2">
                        <div className="container py-3 my-2 my-cart">
                            <div >
                                <Cart
                                    removeItem={removeItem}
                                    selectPhone={selectPhone}
                                    selected={selected}
                                    cart={cart}
                                    resetItem={resetItem}
                                ></Cart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    );
};

export default Shop;