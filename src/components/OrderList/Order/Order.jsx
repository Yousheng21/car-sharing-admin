import React from "react";
import Image from "../../common/Image/Image";
import Additional from "./Additional";

const DateInterval = ({ from, to }) => {
  const dateFrom = new Date(from).toLocaleString();
  const dateTo = new Date(to).toLocaleString();
  return `${dateFrom} - ${dateTo}`;
};

const Order = ({ entity }) => {
  return (
    <section key={entity.id} className="order">
      <div className="img">
        <Image thumbnail={entity.carId ? entity.carId.thumbnail : null} />
      </div>
      <div className="info">
        <span>{entity.carId ? entity.carId.name : ""}</span> в{" "}
        <span>{entity.cityId ? entity.cityId.name : ""}</span>,{" "}
        {entity.pointId ? entity.pointId.address : ""}
        <br />
        <DateInterval from={entity.dateFrom} to={entity.dateTo} />
        <br />
        <p>
          Цвет: <span>{entity.color}</span>. <br /> Статус:{" "}
          <span>{entity.orderStatusId ? entity.orderStatusId.name : ""}</span>
        </p>
      </div>
      <Additional order={entity} />
      <div className="price">
        {entity.price ? (
          <h1>{entity.price} ₽</h1>
        ) : (
          <span>Цена не указана</span>
        )}
      </div>
    </section>
  );
};

export default Order;
