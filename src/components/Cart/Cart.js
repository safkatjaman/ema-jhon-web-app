import React from 'react';
import './Cart.css'
import { faToiletPaper } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
      const cart = props.cart;
      /* const totalPrize = cart.reduce((total, prd) => total + prd.price, 0); */

      let total = 0;
      for (let i = 0; i < cart.length; i++) {
            const product = cart[i];
            total = total + product.price;
      }

      let shipping = 0;
      if (total > 35){
            shipping = 0;
      }
      else if (total > 15) {
            shipping = 4.99;
      } 
      else if (total > 0){
            shipping = 12.99;
      }

      const tax = (total / 10).toFixed(2);
      const grandTotal = (total + shipping + Number(tax)).toFixed(2);

      const formatNumber = num => {
            const precision = num.toFixed(2);
            return Number(precision);
      }
      return (
            <div>
                  <h3 className="cart-align-1">Order Summary</h3>
                  <p className="cart-align-2">Items Ordered: {cart.length}</p>
                  <p><small>Shipping Cost: {shipping}</small></p>
                  <p>Order Price: {formatNumber(total)} </p>
                  <p><small>Tax + Vat: {tax} </small></p>
                  <p>Total Price: {grandTotal}</p>
            </div>
      );
};

export default Cart;