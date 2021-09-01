import React from "react";
import { domain } from "../../reducers/data/dataServer";

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
      src={
        car ? getSrc() : "https://img.icons8.com/ios/100/000000/no-image.png"
      }
      alt={car ? car.name : "photo"}
    />
  );
};

export default Image;
