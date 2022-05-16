import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Header() {
  ///BEM naming convention
  return (
    <header className="header">
      <div className="header__left">
        <Link className="header__logo" title="Logo" to="/">
          {" "}
          Rebrandly
        </Link>
        <nav>
          <Link className="header__link" to="/">
            Features
          </Link>
          <Link className="header__link" to="/">
            Pricing
          </Link>
        </nav>
      </div>

      <Link className="header__link" to="/">
        Login
      </Link>
    </header>
  );
}

export default Header;
