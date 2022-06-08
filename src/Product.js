import React, { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Product.css";
import reducer from "./reducer";
import { initialState } from "./reducer";

const Product = (props) => {
  const { id, title, image, price, rating } = props;
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div key={id} className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Baskit</button>
    </div>
  );
};

export default Product;
