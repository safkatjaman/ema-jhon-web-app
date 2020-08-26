import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {

      const {img, name, price, star, seller, stock} = props.product;
      return (
            <div className="product">
                  <div className="image-style">
                        <img src={img} alt=""/>
                  </div>
                  
                  <div className="name-style">
                        <h4 className="product-name">{name}</h4>
                        <br/>
                        <p><small>by: {seller}</small></p>
                        <p>${price}</p>
                        <p>Only {stock} left in stock - Order Soon</p>
                        <button  className='cart-button' onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                  </div>
            </div>
      );
};

export default Product;