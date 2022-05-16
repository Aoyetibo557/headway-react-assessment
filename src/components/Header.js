import React from "react";
import "./styles.css";

function Header() {
  ///BEM naming convention
  return (
    <header className="header">
      <section className="header__container">
        <div className="header__left">
          <a className="header__logo" title="Logo" href="/">
            {" "}
            Rebrandly
          </a>
          <nav>
            <a className="header__link" href="/">
              Features
            </a>
            <a className="header__link" href="/">
              Pricing
            </a>
          </nav>
        </div>

        <a className="header__link" href="/">
          Login
        </a>
      </section>
    </header>
  );
}

export default Header;
