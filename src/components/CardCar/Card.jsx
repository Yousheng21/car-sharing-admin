import React, { useState } from "react";
import { regExpLocalImage } from "../../reducers/data/regExp";
import Upload from "../../images/Upload img.svg";

const Title = ({ title, valid = true, className }) => {
  if (title && valid) return <h1 className={className}>{title}</h1>;
  return "";
};

const Card = ({ tank, description, category, modelName }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageTitle, setImageTitle] = useState("Выберите файл...");

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImageSrc(URL.createObjectURL(event.target.files[0]));
      setImageTitle(event.target.value.replace(regExpLocalImage, ""));
    }
  };
  return (
    <section className="card-car__card">
      <div className="card-car__card-main">
        {imageSrc ? (
          <img src={imageSrc} alt="carPhoto" />
        ) : (
          <div className="upload-img">
            <h3>Загрузите изображение</h3>
            <Upload />
          </div>
        )}
        <Title title={modelName.value} valid={modelName.inputValid} />
        <Title className="category-title" title={category.name} />
        <div className="card-file">
          <input
            type="file"
            onChange={onImageChange}
            id="file"
            className="input"
          />
          <label htmlFor="file">
            <span id="file-name" className="file-box">
              {imageTitle}
            </span>
            <div className="file-button">
              <span>Обзор</span>
            </div>
          </label>
        </div>
      </div>
      <div className="card-progress">
        <div className="card-progress__info">
          <span>Заполнено</span>
          <span>{tank.value}%</span>
        </div>
        <input
          onChange={tank.onChange}
          type="range"
          value={tank.value}
          name="tank"
          id=""
        />
      </div>
      <div className="card-description">
        <h5>Описание</h5>
        <textarea
          value={description.value}
          name="description"
          onChange={description.onChange}
        />
      </div>
    </section>
  );
};

export default Card;
