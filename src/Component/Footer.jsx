import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-logo">Seeflix</h2>
      <p>© 2026 Seeflix. All rights reserved.</p>
      <nav className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/media">Media</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </footer>
  );
};

export default Footer;