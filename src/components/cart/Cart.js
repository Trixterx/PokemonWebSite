import React, { useContext } from "react";
import { ItemsInCartContext } from "../../shared/provider/ItemsInCartProvider";
import "./Cart.css";

export const Cart = ({ isCartOpen, cartHandler }) => {
  const [itemsInCart, setItemsInCart] = useContext(ItemsInCartContext);

  const displayCart = () => {
    return itemsInCart.map((item, i) => <h1 key={i}>{item}</h1>);
  };

  return (
    <div className={isCartOpen ? "cart cart--open" : "cart"}>
      <span>
        Cart <button onClick={() => cartHandler(false)}>X</button>
        {displayCart()}
      </span>
    </div>
  );
};
