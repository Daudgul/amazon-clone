import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CheckoutProduct.css";

const CheckoutProduct = (props) => {
  const { id, title, image, price, rating } = props;
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const removeFromBasket = () => {
    //remove from add basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
