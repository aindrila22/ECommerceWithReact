import React, { useContext } from "react";
import { CartContext } from "../Global/CartContext";

const Cart = () => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);
  return (
    <div className="cart-container">
      <div className="cart-details">
        {shoppingCart.length > 0
          ? shoppingCart.map((cart) => (
              <div className="cart" key={cart.id}>
                <span className="cart-image">
                  <img src={cart.image} alt="not found" />
                </span>
                <span className="cart-product-name">{cart.name}</span>
                <span className="cart-product-price"> ₹{cart.price}.00</span>
                <span
                  className="inc"
                  onClick={() => dispatch({ type: "INC", id: cart.id, cart })}
                >
                  <i className="fas fa-plus"></i>
                </span>
                <span className="product-quantity">{cart.qty}</span>
                <span
                  className="dec"
                  onClick={() => dispatch({ type: "DEC", id: cart.id, cart })}
                >
                  <i className="fas fa-minus"></i>
                </span>
                <span className="product-totalprice">
                  ₹{cart.price * cart.qty}.00
                </span>
                <span className="delete-product">
                  <i className="fas fa-trash"></i>
                </span>
              </div>
            ))
          : "Yor cart is empty"}
      </div>
    </div>
  );
};

export default Cart;
