import React from "react";
import "./styles.css";
import AppLogo from "../assets/logo.png";
import { HiMenu } from "react-icons/hi";
function Header() {
  ///BEM naming convention
  return (
    <header className="header">
      <section className="header__container">
        <nav className="header__nav">
          <a className="header__logo" title="Logo" href="/">
            {" "}
            <img className="header__logo-img" src={AppLogo} alt="AppLogo" />
          </a>

          <div>
            <HiMenu className="menubar" />
          </div>

          <div className="nav__left">
            <a className="header__link" href="/">
              Features
            </a>
            <a className="header__link" href="/">
              Donations
            </a>
            <a className="header__link" href="/">
              Pricing
            </a>
            <a className="header__link" href="/">
              Enterprise
            </a>
          </div>

          <div className="nav__right">
            <a className="header__link" href="/">
              Login
            </a>
            <a className="header__link" href="/">
              Sign up
            </a>
            <button type="submit" className="btn secondary__btn">
              Get a quote{" "}
            </button>
          </div>
        </nav>
      </section>
    </header>
  );
}

export default Header;
