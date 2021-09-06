import React from "react";
import Image from "../../common/Image";
import Color from "./Color";

const Car = ({ storeModels, models }) => {
  if (!storeModels.length) return "Загрузка моделей";
  if (!models.length) return "Моделей не найдено";
  return (
    <section className="models">
      {models.map((model) => (
        <section key={model.id} className="model">
          <div className="title">
            <h1>{model.name}</h1>
          </div>
          <div className="img">
            <Image car={model} />
          </div>
          <div className="info">
            <p>{model.description ?? "Описание отсутсвует"}</p>
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
            <span>
              {model.categoryId
                ? model.categoryId.name
                : "Категория отсутствует"}
            </span>
          </div>
          <div className="colors">
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
