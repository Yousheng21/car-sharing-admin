import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import ListSelector from "../../../../utils/listSelectors";
import "./entity.scss";

const Entity = ({ entities, children }) => {
  const { isUpdated } = ListSelector();
  if (isUpdated) return <Preloader title="Обновление..." />;
  if (!entities.length)
    return <h1 className="title-empty">Данные не найдены</h1>;
  return <section className="list">{children}</section>;
};

export default Entity;
