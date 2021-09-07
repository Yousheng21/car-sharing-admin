import React from "react";
import { useSelector } from "react-redux";
import Image from "../../common/Image";
import Additional from "./Additional";
import Buttons from "./Buttons";
import Preloader from "../../common/Preloader/Preloader";

const DateInterval = ({ from, to }) => {
  const dateFrom = new Date(from).toLocaleString();
  const dateTo = new Date(to).toLocaleString();
  return `${dateFrom} - ${dateTo}`;
};

const Order = ({ orders }) => {
  const isUpdated = useSelector((state) => state.app.isUpdated);
  if (isUpdated) return <Preloader title="Обновление..." />;
  if (!orders.length)
    return <h1 className="title-empty">Заказов не найдено</h1>;
  return (
    <section className="orders">
      {orders.map((order) => (
        <section key={order.id} className="order">
          <div className="img">
            <Image car={order.carId} />
          </div>
          <div className="info">
            <span>{order.carId ? order.carId.name : ""}</span> в{" "}
            <span>{order.cityId ? order.cityId.name : ""}</span>,{" "}
            {order.pointId ? order.pointId.address : ""}
            <br />
            <DateInterval from={order.dateFrom} to={order.dateTo} />
            <br />
            <p>
              Цвет: <span>{order.color}</span>. <br /> Статус:{" "}
              <span>{order.orderStatusId ? order.orderStatusId.name : ""}</span>
            </p>
          </div>
          <Additional order={order} />
          <div className="price">
            {order.price ? (
              <h1>{order.price} ₽</h1>
            ) : (
              <span>Цена не указана</span>
            )}
          </div>
          <Buttons />
        </section>
      ))}
    </section>
  );
};

export default Order;
