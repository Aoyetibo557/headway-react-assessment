import React, { useState } from "react";
import "./styles.css";
import "../globalstyles.css";

function CustomForm() {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");

  return (
    <div className="customform">
      <form>
        <input
          type="text"
          placeholder="Make your links shorter"
          value={url}
          onInput={(e) => setUrl(e.target.value)}
          className="customform__input"
        />

        <input
          type="text"
          placeholder="Custom Slug"
          value={slug}
          onInput={(e) => setSlug(e.target.value)}
          className="customform__input"
        />

        <button type="submit" className="btn primary__btn">
          Shorten URL
        </button>
      </form>
    </div>
  );
}

export default CustomForm;
