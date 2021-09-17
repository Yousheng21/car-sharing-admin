import React from "react";
import classNames from "classnames";
import Image from "../../common/Image/Image";
import Color from "./Color";

const Car = ({ entity }) => {
  const emptyClass = (parameter) => {
    return classNames({
      empty: parameter,
    });
  };

  return (
    <section key={entity.id} className="model">
      <div className="img">
        <Image thumbnail={entity ? entity.thumbnail : null} />
      </div>
      <div className="info">
        <h1>{entity.name}</h1>
        <p className={emptyClass(!entity.description)}>
          {entity.description.length
            ? entity.description
            : "Описание отсутсвует"}
        </p>
        <span className={emptyClass(!entity.categoryId)}>
          {entity.categoryId ? (
            <span>
              Категория:{" "}
              <span className="info-title">{entity.categoryId.name}</span>
            </span>
          ) : (
            " Категория отсутствует"
          )}
          <br />
        </span>
        {entity.tank ? (
          <span>
            Топливо: <span className="info-title">{entity.tank}%</span>
            <br />
          </span>
        ) : (
          ""
        )}
        {entity.number ? (
          <span>
            Номер: <span className="info-title">{entity.number}</span>
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="price">
        <h1>
          {entity.priceMin} - {entity.priceMax} ₽
        </h1>
      </div>
      <div
        className={classNames({
          colors: true,
          empty: !entity.colors.length,
        })}
      >
        {entity.colors.length
          ? entity.colors.map((color) => <Color key={color} color={color} />)
          : "Нет цветов"}
      </div>
    </section>
  );
};

export default Car;
