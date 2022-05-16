import React from "react";
import Header from "../components/Header";
import "./styles.css";
import PersonImage from "../assets/person.png";
import CustomForm from "../components/CustomForm";
import Footer from "../components/Footer";
import GetUrls from "../components/GetUrls";

function LandingPage() {
  return (
    <div className="landingpage">
      <Header />

      <section className="landingpage__body">
        <article className="landingpage__article">
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

        <div>
          <img className="landingpage__img" src={PersonImage} alt="Person" />
        </div>
      </section>

      <CustomForm />
      <GetUrls />
      <Footer />
    </div>
  );
}

export default LandingPage;
