import React from "react";
import { domain } from "../../reducers/data/api/server";
import Photo from "../../images/no-image.png";

const Image = ({ car }) => {
  const getSrc = () => {
    return car.thumbnail.path[0] === "/"
      ? domain + car.thumbnail.path
      : car.thumbnail.path;
  };

  return (
    <img
      crossOrigin="anonymous"
      referrerPolicy="origin"
      src={car ? getSrc() : Photo}
      alt={car ? car.name : "photo"}
    />
  );
};

export default Image;
