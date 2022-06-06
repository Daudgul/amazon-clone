import React from "react";
import "./Product.css";

const Product = (props) => {
  const { id, title, image, price, rating } = props;
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

      <button>Add to Baskit</button>
    </div>
  );
};

export default Product;
