import React, { useReducer } from "react";
import "./Header.css";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebaseApp";

const Header = () => {
  const basket = useSelector((state) => state.basket);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const length = basket.length;

  // const getTotalItems = (items) => {
  //   items.reduce((ask, item) => ask + item.amount, 0);
  //   console.log(items);
  // };

  // const getTotalItems = () => {
  //   //remove from add basket
  //   dispatch({
  //     type: "GET_TOTAL_FROM_BASKET",
  //     items: 0,
  //   });
  // };

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "signin"}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">{user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="checkout">
          <div className="header__optionBasket">
            <Badge
              sx={{ color: "#fff" }}
              badgeContent={length}
              className="header__optionLineTwo header__basketCount"
            >
              <ShoppingBasketIcon />
            </Badge>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
