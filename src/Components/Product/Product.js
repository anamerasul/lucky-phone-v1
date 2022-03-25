import React from 'react';
import "./Product.css"

const Product = (props) => {
    console.log(props)
    const {image,slug}=props.product
    console.log(image)
    return (
<div className="col my-product-width">

    <div className="card">
      <img src={image} className="img-fluid" alt={slug}></img>
      <div className="card-body">
        <h5 className="card-title bg-primary">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

    );
};

export default Product;