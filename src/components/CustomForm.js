import React, { useState } from "react";
import "./styles.css";
import "../globalstyles.css";
import { BsClipboard } from "react-icons/bs";

function CustomForm() {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");

  return (
    <div className="customform">
      <form
        method="POST"
        aria-roledescription="Has two input forms. To take in user URL and custom slug"
        title="input form"
      >
        <div>
          <input
            type="text"
            placeholder="Make your links shorter"
            value={url}
            onInput={(e) => setUrl(e.target.value)}
            className="customform__input"
          />
          <BsClipboard
            className="input__icon"
            onClick={() => {
              navigator.clipboard.writeText(url);
              alert("Copied!");
            }}
          />
        </div>

        <input
          type="text"
          placeholder="Custom Slug"
          value={slug}
          onInput={(e) => setSlug(e.target.value)}
          className="slug customform__input"
        />

        <button type="submit" className="btn primary__btn btn__responsive">
          Shorten URL
        </button>
      </form>

      <div>
        <p>
          {" "}
          By clicking shorten, you agree to Rebrandly's{" "}
          <span> Terms of Use </span> and <span>Privacy Policy </span>
        </p>
      </div>
    </div>
  );
}

export default CustomForm;
