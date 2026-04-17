import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({
  heroTitle = "Welcome to Seeflix",
  heroTagline = "Stream the best movies anywhere, anytime.",
  heroButtonText = "Explore",
  heroButtonLink = "/",
  showSocials = false,
  background = "",
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonContent = heroButtonText && heroButtonLink;
  const isInternalLink =
    typeof heroButtonLink === "string" &&
    (heroButtonLink.startsWith("/") || heroButtonLink.startsWith("#"));
  const isHashLink = typeof heroButtonLink === "string" && heroButtonLink.startsWith("#");

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <section className="Herosect">
      <div
        className="Herosect-background"
        style={{ backgroundImage: background ? `url(${background})` : "none" }}
      />
      <nav className={`Navbar-1 ${menuOpen ? "open" : ""}`}>
        <div id="LOGO-1">
          <Link to="/" onClick={closeMenu}>Seeflix</Link>
        </div>
        <button
          className={`mobile-menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/media" onClick={closeMenu}>Media</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="Hero-content">
        <h1>{heroTitle}</h1>
        <p>{heroTagline}</p>

        {buttonContent ? (
          isInternalLink ? (
            isHashLink ? (
              <a className="hero-btn" href={heroButtonLink}>
                {heroButtonText}
              </a>
            ) : (
              <Link className="hero-btn" to={heroButtonLink}>
                {heroButtonText}
              </Link>
            )
          ) : (
            <a className="hero-btn" href={heroButtonLink}>
              {heroButtonText}
            </a>
          )
        ) : null}

        {showSocials && (
          <div className="Hero-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
