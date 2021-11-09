import React from "react";
import classNames from "classnames";
import LocationIcon from "../../images/Location.svg";

const Point = ({ entity }) => {
  return (
    <section key={entity.id} className="point">
      <div className="point-img">
        <LocationIcon />
      </div>
      <div className="point-name">
        <h1>{entity.name}</h1>
      </div>
      <div className="point-address">
        <h1>{entity.address}</h1>
      </div>
      <div className="point-city">
        <h1
          className={classNames({
            empty: !entity.cityId,
          })}
        >
          {entity.cityId ? entity.cityId.name : "Город отсутсвует"}
        </h1>
      </div>
    </section>
  );
};

export default Point;
