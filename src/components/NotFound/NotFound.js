import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <h1 className="title">404 Error - Page Not Found</h1>
        <p className="message">
          Sorry, the page you're looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
