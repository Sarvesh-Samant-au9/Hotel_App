/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const NotFound = () => {
  const styles = {
    display: "block",
    margin: "auto",
  };
  return (
    <div>
      <h2 className="text-center display-3">Sorry!! Invalid Page</h2>

      <div
        style={{
          width: "80%",
          height: "0",
          paddingBottom: "56%",
          position: "relative",
          margin: "auto",
        }}
      >
        <iframe
          src="https://giphy.com/embed/UoeaPqYrimha6rdTFV"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <h3 className="text-center">
        Page Not Found <span className=" badge badge-danger">Error 404</span>
      </h3>
    </div>
  );
};

export default NotFound;
