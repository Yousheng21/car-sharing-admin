import React from "react";
import BlogIcon from "../../images/Blog Icon.svg";
import BlogPost from "../../images/Blog Posts Icon.svg";
import NewPost from "../../images/Add New Post Icon.svg";

export const tabs = [
  { text: "Карточка автомобиля", icon: <BlogIcon />, path: "/" },
  { text: "Список авто", icon: <BlogPost />, path: "/cardList" },
  { text: "Заказы", icon: <NewPost />, path: "/orderList" },
];
