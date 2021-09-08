import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import Image from "../../common/Image";
import Color from "./Color";
import Preloader from "../../common/Preloader/Preloader";

const Car = ({ models }) => {
  const isUpdated = useSelector((state) => state.app.isUpdated);
  if (isUpdated) return <Preloader title="Обновление..." />;
  if (!models.length)
    return <h1 className="title-empty">Моделей не найдено</h1>;

  const emptyClass = (parameter) => {
    return classNames({
      empty: parameter,
    });
  };

  return (
    <section className="models">
      {models.map((model) => (
        <section key={model.id} className="model">
          <div className="img">
            <Image car={model} />
          </div>
          <div className="info">
            <h1>{model.name}</h1>
            <p className={emptyClass(!model.description)}>
              {model.description ?? "Описание отсутсвует"}
            </p>
            {model.tank ? (
              <span>
                Топливо: <span className="info-title">{model.tank}%</span>
                <br />
              </span>
            ) : (
              ""
            )}
            {model.number ? (
              <span>
                Номер: <span className="info-title">{model.number}</span>
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="price">
            <h1>
              {model.priceMin} - {model.priceMax} ₽
            </h1>
          </div>
          <div className="category">
            <span className={emptyClass(!model.categoryId)}>
              {model.categoryId
                ? model.categoryId.name
                : " Категория отсутствует"}
            </span>
          </div>
          <div
            className={classNames({
              colors: true,
              empty: !model.colors.length,
            })}
          >
            {model.colors.length
              ? model.colors.map((color) => <Color key={color} color={color} />)
              : "Нет цветов"}
          </div>
        </section>
      ))}
    </section>
  );
};

export default Car;
