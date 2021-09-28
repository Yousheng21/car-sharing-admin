import React from "react";
import BlogIcon from "../../images/Blog Icon.svg";
import CarIcon from "../../images/CarIcon.svg";
import PointIcon from "../../images/Point.svg";
import OrderIcon from "../../images/OrderIcon.svg";

export const tabs = [
  { text: "Карточка автомобиля", icon: <BlogIcon />, path: "/cardCar" },
  { text: "Список авто", icon: <CarIcon />, path: "/cardList" },
  { text: "Карточка заказа", icon: <OrderIcon />, path: "/orderCard" },
  { text: "Заказы", icon: <OrderIcon />, path: "/orderList" },
  { text: "Карточка пункта", icon: <PointIcon />, path: "/pointCard" },
  { text: "Пункты", icon: <PointIcon />, path: "/pointList" },
];
