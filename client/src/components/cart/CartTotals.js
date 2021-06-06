import React from "react";
import styles from "../../styles/pages/cart_page.module.scss";
import { useCartContext } from "../../context/cart_context";

import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/user_context";
const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { user } = useUserContext();

  return (
    <div className={styles["cart-totals"]}>
      <div>
        <article className={styles.conatianer}>
          <h5 className={styles.subtotal}>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p className={styles.shipping}>
            shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4 className={styles.total}>
            order total :{" "}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {user ? (
          <Link to="/checkout" className={`${styles.btn} btn btn--primary`}>
            proceed to checkout
          </Link>
        ) : (
          <button type="button" className={`${styles.btn} btn btn--primary`}>
            login
          </button>
        )}
      </div>
    </div>
  );
};

export default CartTotals;
