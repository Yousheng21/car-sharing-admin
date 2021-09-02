import React from "react";
import classNames from "classnames";
import Image from "../../common/Image";
import {
  orderCloseId,
  orderCompleteId,
} from "../../../reducers/data/api/server";
import { additional } from "../../../reducers/data/dataOrder";
import Check from "../../../images/Check Icon.svg";
import Reject from "../../../images/Reject Icon.svg";
import Edit from "../../../images/Edit Icon.svg";

const Order = ({ orders }) => {
  return orders.length
    ? orders.map((order) => (
        <section key={order.id} className="order">
          <div className="img">
            <Image car={order.carId} />
          </div>
          <div className="info">
            <p>
              <span>{order.carId ? order.carId.name : ""}</span> в{" "}
              <span>{order.cityId ? order.cityId.name : ""}</span>,{" "}
              {order.pointId ? order.pointId.address : ""}
              <br />
              {new Date(order.dateFrom).toLocaleString()} -{" "}
              {new Date(order.dateTo).toLocaleString()}
              <br />
              Цвет: <span>{order.color}</span>
              <br />
            </p>
          </div>
          <div className="additional">
            {additional.map((item) => (
              <label
                key={item.name}
                className={classNames({
                  active: order[item.key],
                })}
                htmlFor={item.name}
              >
                <input
                  type="checkbox"
                  name="additional"
                  id={item.name}
                  value={item.name}
                  readOnly
                />
                {item.name}
                <span className="check-mark" />
              </label>
            ))}
          </div>
          <div className="price">
            <h1>{order.price} ₽</h1>
          </div>
          <div className="buttons">
            {order.orderStatusId &&
            orderCompleteId === order.orderStatusId.id ? (
              ""
            ) : (
              <button type="button">
                <Check /> Готово
              </button>
            )}
            {order.orderStatusId && orderCloseId === order.orderStatusId.id ? (
              ""
            ) : (
              <button type="button">
                <Reject /> Отмена
              </button>
            )}
            <button type="button">
              <Edit /> Изменить
            </button>
          </div>
        </section>
      ))
    : "Заказов не найдено";
};

export default Order;
