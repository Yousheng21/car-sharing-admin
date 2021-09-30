import React from "react";
import BlogIcon from "../../images/Blog Icon.svg";
import CarIcon from "../../images/CarIcon.svg";
import PointIcon from "../../images/Point.svg";
import CardPointIcon from "../../images/Card Point.svg";
import OrderIcon from "../../images/OrderIcon.svg";
import CardOrderIcon from "../../images/Card Order.svg";

export const tabs = [
  { text: "Карточка автомобиля", icon: <BlogIcon />, path: "/cardCar" },
  { text: "Список авто", icon: <CarIcon />, path: "/cardList" },
  { text: "Карточка заказа", icon: <CardOrderIcon />, path: "/orderCard" },
  { text: "Заказы", icon: <OrderIcon />, path: "/orderList" },
  { text: "Карточка пункта", icon: <CardPointIcon />, path: "/pointCard" },
  { text: "Пункты", icon: <PointIcon />, path: "/pointList" },
];
