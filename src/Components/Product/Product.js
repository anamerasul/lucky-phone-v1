import React from 'react';
import "./Product.css"
import { FaCartPlus } from 'react-icons/fa';

const Product = (props) => {

  const { handleAddtoCart, product } = props
  const { image, name, slug, price } = product
  return (
    <div className="col my-product-width my-2">

      <div className="card">
        <img src={image} className="img-fluid px-2 py-2" alt={slug}></img>
        <div className="card-body mx-auto p-3">
          <h5 className="card-title">Name: {name}</h5>
          <p className="card-text">Price:$ {price}</p>
          <a className='btn btn-primary btn-lg fs-6' onClick={() => handleAddtoCart(product)} href="/#cart" >Add to cart <FaCartPlus></FaCartPlus></a>

        </div>
      </div>
    </div>

  );
};

export default Product;