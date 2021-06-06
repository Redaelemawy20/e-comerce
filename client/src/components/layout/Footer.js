import React from "react";
import footerStyle from "../../styles/layout/_footer.module.scss";
const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <h5 className={footerStyle.text}>
        &copy; {new Date().getFullYear()}
        <span className={footerStyle.name}> HappyHome</span>
      </h5>
      <h5>All rights reserved</h5>
    </footer>
  );
};

export default Footer;
