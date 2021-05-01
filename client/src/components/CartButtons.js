import React from "react";
import { FaUserMinus, FaUserPlus } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { user, logout } = useUserContext();
  return (
    <Wrapper>
      {user ? (
        <button
          onClick={logout}
          type="button"
          className="btn auth-btn btn--accent"
        >
          Logout
        </button>
      ) : (
        <a href="/auth/google" className="btn auth-btn btn--primary">
          Login
        </a>
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
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -17px;
    right: -20px;
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
  @media screen and (min-width: 800px) {
    .cart-value {
      top: -11px;
      right: -17px;
    }
  }
  .auth-btn {
    margin-left: auto;
    margin-right: 1.4rem;
    display: flex;
    align-items: center;

    font-size: 1rem;
    cursor: pointer;

    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButtons;
