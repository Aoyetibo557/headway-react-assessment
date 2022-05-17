import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD__URLS } from "../graphql/Queries";

function GetUrls() {
  const [urls, setUrls] = useState([]);
  const { error, loading, data } = useQuery(LOAD__URLS);

  useEffect(() => {
    if (data) {
      setUrls(data.getAllUrl);
    }
  }, [data, urls]);
  return (
    <div className="geturls">
      <div>
        {urls.map((url) => (
          <div>
            <a href={url.originalUrl}> {url.originalUrl}</a>
            <a href={url.originalUrl}> {url.shortUrl}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetUrls;
