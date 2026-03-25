import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({
  heroTitle = "Welcome to Tize Movies",
  heroTagline = "Stream anytime, anywhere",
  heroButtonText = "Get Started",
  heroButtonLink = "/media",
  showSocials = true,
}) => {
  return (
    <header className="Herosect">
    
      <div
        className="Herosect-background"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/55/16/40/551640da597668e1aed94ed05f3cf3e4.jpg')",
        }}
      ></div>

    
      <section className="Navbar-1">
        <div className="logo">
          <h2 id="LOGO-1">
            <Link to="/">Tize Movies</Link>
          </h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/media">Media</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </section>

    
      <section className="Hero-content">
        <h1>{heroTitle}</h1>
        <p>{heroTagline}</p>
        <Link to={heroButtonLink} className="hero-btn">
          {heroButtonText}
        </Link>

        {showSocials && (
          <div className="Hero-socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        )}
      </section>
    </header>
  );
};

export default Header;