import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import LocationIcon from "../../images/Location.svg";
import Preloader from "../common/Preloader/Preloader";

const Point = ({ points }) => {
  const isUpdated = useSelector((state) => state.app.isUpdated);
  if (isUpdated) return <Preloader title="Обновление..." />;
  if (!points.length)
    return <h1 className="title-empty">Пунктов не найдено</h1>;
  return (
    <section className="points">
      {points.map((point) => (
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
        </section>
      ))}
    </section>
  );
};

export default Point;