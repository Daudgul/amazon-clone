import React from "react";
import { useSelector } from "react-redux";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const basket = useSelector((state) => state.basket);
  const user = useSelector((state) => state.user);

  const guest = user?.email;
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h3>Hello, {guest}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              amount={item.amount}
            />
          ))}
          {/* BaskitItem */}
          {/* BaskitItem */}
          {/* BaskitItem */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
