import React, { useContext } from 'react';
import './CartItems.css';
import { ShopeContext } from '../../Context/ShopeContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopeContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems && cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>Br{e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>Br{e.new_price * cartItems[e.id]}</p>
                <img 
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="remove"
                  className="cart-remove-icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null; // ✅ handle when condition is false
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Total</h1>
            <div>
                <div className="cartitems-total-items">
                    <p>Subtotal</p>
                    <p>Br{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                    <h3>Total</h3>
                    <h3>Br{getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitem-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promo-box">
                <input type="text" placeholder='Your Promo code' />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
