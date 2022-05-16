import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div>
        <a className="footer__link" href="/">
          Terms & Conditions{" "}
        </a>
        <a className="footer__link" href="/">
          Privacy Policy
        </a>
        <a className="footer__link" href="/">
          Cookie Policy
        </a>
      </div>

      <p> Rebrandly &copy; Copyright 2020</p>
    </div>
  );
}

export default Footer;
