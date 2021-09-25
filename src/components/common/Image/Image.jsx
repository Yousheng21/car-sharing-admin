import React, { useMemo } from "react";
import { domain } from "../../../reducers/data/api/server";
import Photo from "../../../images/no-image.png";
import "./image.scss";

const Image = ({ thumbnail }) => {
  const getSrc = useMemo(() => {
    if (thumbnail)
      return thumbnail.path[0] === "/"
        ? domain + thumbnail.path
        : thumbnail.path;
    return Photo;
  }, [thumbnail]);

  return (
    <img
      crossOrigin="anonymous"
      referrerPolicy="origin"
      className="car-img"
      src={getSrc}
      alt={thumbnail ? thumbnail.originalname : "photo"}
    />
  );
};

export default Image;
