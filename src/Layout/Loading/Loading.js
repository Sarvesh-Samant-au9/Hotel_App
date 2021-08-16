/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const Loading = () => {
  const styles = { display: "block", margin: "auto" };
  return (
    <>
      <iframe
        src={"https://giphy.com/embed/KG4PMQ0jyimywxNt8i"}
        width={480}
        height={480}
        frameBorder="0"
        className="giphy-embed text-center"
        allowFullScreen
        style={styles}
      ></iframe>
      <h3 className="text-center">Loading....</h3>
    </>
  );
};

export default Loading;
