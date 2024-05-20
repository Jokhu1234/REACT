import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; 2023 My Job Board. All rights reserved. | 
        <Link to="/contact"> Contact Us </Link> |  <Link to="/termsofservice">Terms of Service</Link> | <Link to="/privacy">Privacy Policy</Link>
      </p>
    </footer>
  );
};
export default Footer;

