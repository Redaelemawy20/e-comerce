import React from "react";
import styles from "../../styles/pages/cart_page.module.scss";
import { formatPrice } from "../../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../context/cart_context";
const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };
  return (
    <div className={styles["cart-item"]}>
      <div className={styles.title}>
        <img src={image} alt={name} />
        <div>
          <h5 className={styles.name}>{name}</h5>
          <p className={styles.color}>
            color : <span style={{ background: color }}></span>
          </p>
          <h5 className={styles["price-small"]}>{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className={styles.price}>{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className={styles.subtotal}>{formatPrice(price * amount)}</h5>
      <button
        type="button"
        className={styles["remove-btn"]}
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
