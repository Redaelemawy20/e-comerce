import React from "react";
import styled from "styled-components";
import logo from "../assets/logo 2.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { user } = useUserContext();
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="happy home" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {user && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
      </div>
      <CartButtons />
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin-bottom: 1rem;

  .home {
    font-size: 1.25rem;
  }
  .nav-center {
    width: 90vw;
    margin-left: 0;
    max-width: var(--max-width);
  }
  .nav-header {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    margin: auto;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  img {
    height: 80%;
    width: 100px;
    margin-left: -15px;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      margin-left: 6rem;
      display: inline-flex;
      justify-content: flex-start;
      li {
        margin: 0 0.5rem;
      }
      a {
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--color-body-darker);
        }
      }
    }

    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
