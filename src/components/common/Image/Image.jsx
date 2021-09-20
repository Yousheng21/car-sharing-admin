import React, { useMemo } from "react";
import { domain } from "../../../reducers/data/api/server";
import Photo from "../../../images/no-image.png";
import "./image.scss";

const Image = ({ car }) => {
  const getSrc = useMemo(() => {
    if (car)
      return car.thumbnail.path[0] === "/"
        ? domain + car.thumbnail.path
        : car.thumbnail.path;
    return Photo;
  }, [car]);

  return (
    <img
      crossOrigin="anonymous"
      referrerPolicy="origin"
      className="car-img"
      src={getSrc}
      alt={car ? car.name : "photo"}
    />
  );
};

export default Image;
