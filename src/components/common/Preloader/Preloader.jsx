import React from "react";
import "./preloader.scss";

const Preloader = ({ title }) => {
  return (
    <div className="preloader">
      <div className="preloader-circle" />
      <h2 className="preloader-title">{title}</h2>
    </div>
  );
};

export default Preloader;
