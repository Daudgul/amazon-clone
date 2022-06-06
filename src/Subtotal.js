import React from "react";
import "./Subtotal.css";

const Subtotal = () => {
  return (
    <div className="subtotal">
      <p>
        Subtotal ( 0 items): <strong></strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
