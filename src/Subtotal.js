import React from "react";
import "./Subtotal.css";
import { useSelector } from "react-redux";
import { getBasketTotal } from "./reducer";

const Subtotal = () => {
  const basket = useSelector((state) => state.basket);
  const total = getBasketTotal(basket).toFixed(2);

  const length = basket.length;
  return (
    <div className="subtotal">
      <p>
        Subtotal ( {length} "items"): <strong>{`$${total}`}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
