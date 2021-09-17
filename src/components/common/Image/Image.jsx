import React from "react";
import { domain } from "../../../reducers/data/api/server";
import Photo from "../../../images/no-image.png";
import "./image.scss";

const Image = ({ thumbnail }) => {
  const getSrc = () => {
    return thumbnail.path[0] === "/" ? domain + thumbnail.path : thumbnail.path;
  };

  return (
    <img
      crossOrigin="anonymous"
      referrerPolicy="origin"
      className="car-img"
      src={thumbnail ? getSrc() : Photo}
      alt={thumbnail ? thumbnail.originalname : "photo"}
    />
  );
};

export default Image;
