import React from "react";
import logo from "../../assets/logo 2.png";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../context/products_context";
import { FaTimes } from "react-icons/fa";
import { links } from "../../utils/constants";
import sidebarStyle from "../../styles/layout/sidebar.module.scss";
import CartButtons from "../cart/CartButtons";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const myUser = null;

  return (
    <aside className={sidebarStyle.container}>
      <div
        className={
          isSidebarOpen
            ? `${sidebarStyle.sidebar}  ${sidebarStyle["show-sidebar"]} `
            : sidebarStyle.sidebar
        }
      >
        <div className={sidebarStyle["sidebar-header"]}>
          <img src={logo} className={sidebarStyle.logo} alt="comfy sloth" />
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className={sidebarStyle.links}>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/checkout" onClick={closeSidebar}>
                checkout
              </Link>
            </li>
          )}
          <li>
            {" "}
            <CartButtons />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
