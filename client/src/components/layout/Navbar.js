import React from "react";
import navStyle from "../../styles/layout/_nav.module.scss";
import logo from "../../assets/logo 2.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../../utils/constants";
import CartButtons from "../cart/CartButtons";
import { useProductsContext } from "../../context/products_context";
import { useUserContext } from "../../context/user_context";
const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { user } = useUserContext();
  return (
    <nav className={navStyle.nav}>
      <div className={navStyle["nav-center"]}>
        <div className={navStyle["nav-header"]}>
          <Link to="/">
            <img src={logo} alt="happy home" />
          </Link>
        </div>
        <ul className={navStyle["nav-links"]}>
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
      <div className={navStyle["nav-toggle"]}>
        <button
          type="button"
          className={navStyle["nav-toggle-icon"]}
          onClick={openSidebar}
        >
          <FaBars />
        </button>
      </div>
      <div className={navStyle["nav-cart"]}>
        <CartButtons />
      </div>
    </nav>
  );
};

export default Nav;
