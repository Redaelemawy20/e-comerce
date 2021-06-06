import React from "react";
import styles from "../../styles/pages/cart_page.module.scss";
import { useCartContext } from "../../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <div className={`section section-center ${styles.content} `}>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className={styles["link-container"]}>
        <Link
          to="/products"
          className={` btn ${styles["link-btn"]} btn--secondary`}
        >
          continue shopping
        </Link>
        <button type="button" className="btn btn--accent" onClick={clearCart}>
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </div>
  );
};

export default CartContent;
