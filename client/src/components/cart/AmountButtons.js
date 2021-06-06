import React from "react";
import buttonsStyles from "../../styles/components/amountbuttons.module.scss";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <div className={buttonsStyles["amount-buttons"]}>
      <button
        type="button"
        className={buttonsStyles["amount-btn"]}
        onClick={decrease}
      >
        <FaMinus />
      </button>
      <h2 className={buttonsStyles.amount}>{amount}</h2>
      <button
        type="button"
        className={buttonsStyles["amount-btn"]}
        onClick={increase}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default AmountButtons;
