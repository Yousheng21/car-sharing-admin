import React from "react";
import classNames from "classnames";
import LocationIcon from "../../images/Location.svg";
import Buttons from "../common/Buttons/Buttons";

const Point = ({ points }) => {
  return points.map((point) => (
    <section key={point.id} className="point">
      <div className="point-img">
        <LocationIcon />
      </div>
      <div className="point-name">
        <h1>{point.name}</h1>
      </div>
      <div className="point-address">
        <h1>{point.address}</h1>
      </div>
      <div className="point-city">
        <h1
          className={classNames({
            empty: !point.cityId,
          })}
        >
          {point.cityId ? point.cityId.name : "Город отсутсвует"}
        </h1>
      </div>
      <Buttons />
    </section>
  ));
};

export default Point;
