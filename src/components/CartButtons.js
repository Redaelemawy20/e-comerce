import React from "react";
import { FaUserMinus, FaUserPlus } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const myUser = null;
  return (
    <Wrapper className="cart-btn-wrapper">
      {myUser ? (
        <button type="button" className="btn auth-btn">
          Logout
        </button>
      ) : (
        <button type="button" className="btn auth-btn">
          Login
        </button>
      )}
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        <span className="cart-container">
          <TiShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -11px;
    right: -16px;
    background: gold;
    width: 10px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    margin-left: auto;
    margin-right: 1.4rem;
    display: flex;
    align-items: center;
    background: #c2cad0;
    border-color: transparent;
    font-size: 1rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButtons;
