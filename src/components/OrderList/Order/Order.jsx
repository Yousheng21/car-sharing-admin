import React from "react";
import Image from "../../common/Image";
import Additional from "./Additional";
import Buttons from "./Buttons";

const DateInterval = ({ from, to }) => {
  const dateFrom = new Date(from).toLocaleString();
  const dateTo = new Date(to).toLocaleString();
  return `${dateFrom} - ${dateTo}`;
};

const Order = ({ orders, storeOrders }) => {
  if (!storeOrders.length) return "Загрузка заказов";
  if (!orders.length && storeOrders.length) return "Заказов не найдено";
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
          <Buttons order={order} />
        </section>
      ))}
    </section>
  );
};

export default Order;
