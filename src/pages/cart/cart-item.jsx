import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  // console.log(props.data); //to see the property names
  // const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, decrementFromCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={props.data.image.url} />
      <div className="description">
        <p>
          <b>{props.data.name}</b>
        </p>
        <p> Totol price: {props.data.price.formatted_with_symbol}</p>
        <div className="countHandler">
          <button onClick={() => decrementFromCart(props.data.id)}> - </button>
          <input
            value={cartItems[props.data.id]} 
            onChange={(e) => updateCartItemCount(Number(e.target.value), props.data.id)}
          />
          <button onClick={() => addToCart(props.data.id)}> + </button>
          <button onClick={() => removeFromCart(props.data.id)}> remove </button>
        </div>
      </div>
    </div>
  );
};
