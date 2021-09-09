import React from "react";
import classNames from "classnames";
import Image from "../../common/Image/Image";
import Color from "./Color";
import Buttons from "../../common/Buttons/Buttons";

const Car = ({ models }) => {
  const emptyClass = (parameter) => {
    return classNames({
      empty: parameter,
    });
  };

  return models.map((model) => (
    <section key={model.id} className="model">
      <div className="img">
        <Image car={model} />
      </div>
      <div className="info">
        <h1>{model.name}</h1>
        <p className={emptyClass(!model.description)}>
          {model.description ?? "Описание отсутсвует"}
        </p>
        <span className={emptyClass(!model.categoryId)}>
          {model.categoryId ? (
            <span>
              Категория:{" "}
              <span className="info-title">{model.categoryId.name}</span>
            </span>
          ) : (
            " Категория отсутствует"
          )}
          <br />
        </span>
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
      <Buttons />
    </section>
  ));
};

export default Car;
