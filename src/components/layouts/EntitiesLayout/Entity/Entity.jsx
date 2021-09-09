import React from "react";
import { useSelector } from "react-redux";
import Preloader from "../../../common/Preloader/Preloader";
import "./entity.scss";

const Entity = ({ entities, children }) => {
  const isUpdated = useSelector((state) => state.app.isUpdated);
  if (isUpdated) return <Preloader title="Обновление..." />;
  if (!entities.length)
    return <h1 className="title-empty">Данные не найдены</h1>;
  return <section className="list">{children}</section>;
};

export default Entity;
