import React from "react";

import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import cartButtonsStyles from "../../styles/components/_cartbuttons.module.scss";
import { useProductsContext } from "../../context/products_context";
import { useCartContext } from "../../context/cart_context";
import { useUserContext } from "../../context/user_context";
const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  const { user, logout } = useUserContext();
  return (
    <div className={cartButtonsStyles["cart-buttons"]}>
      {user ? (
        <button
          onClick={logout}
          type="button"
          className={`btn ${cartButtonsStyles["auth-btn"]} btn--accent`}
        >
          Logout
        </button>
      ) : (
        <a
          href="/auth/google"
          className={`btn ${cartButtonsStyles["auth-btn"]} btn--primary`}
        >
          Login With Google
        </a>
      )}
      <Link
        to="/cart"
        className={cartButtonsStyles["cart-btn"]}
        onClick={closeSidebar}
      >
        <span className={cartButtonsStyles["cart-container"]}>
          <TiShoppingCart />
          <span className={cartButtonsStyles["cart-value"]}>{total_items}</span>
        </span>
      </Link>
    </div>
  );
};

export default CartButtons;
