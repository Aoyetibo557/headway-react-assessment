import React from "react";
import Header from "../components/Header";
import "./styles.css";
function LandingPage() {
  return (
    <div className="landingpage">
      <Header />

      <section className="landingpage__body">
        <article>
          <h3>Your Brand on Your Links</h3>
          <p>
            Rebrandly is the industry leading link management platform to band,
            track and share short URLs using a custom domain name
          </p>

          <div>
            <button className="btn primary__btn" type="submit">
              {" "}
              Sign up free
            </button>
            <button className="btn secondary__btn" type="submit">
              {" "}
              Request a demo
            </button>
          </div>
        </article>
      </section>
    </div>
  );
}

export default LandingPage;
