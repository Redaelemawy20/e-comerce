import React from "react";
import styles from "../../styles/pages/cart_page.module.scss";

const CartColumns = () => {
  return (
    <div className={styles["cart-column"]}>
      <div className={styles.content}>
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr />
    </div>
  );
};

export default CartColumns;
