import React, { useState } from "react";
import Upload from "../../images/Upload img.svg";
import Modal from "../common/Modal/Modal";

const Title = ({ title, valid = true, className }) => {
  if (title && valid) return <h1 className={className}>{title}</h1>;
  return "";
};

const Card = ({ dataForm, handleDataForm, categories }) => {
  const [activeModal, setActiveModal] = useState(false);
  const onImageChange = (event) => {
    const { files, name } = event.target;
    if (files && files[0] && files[0].type.split("/")[0] === "image") {
      setActiveModal(false);
      const value = {
        name: files[0].name,
        path: URL.createObjectURL(files[0]),
      };
      handleDataForm(name, value, value.path);
    } else setActiveModal(true);
  };
  const getCategory = (id) => {
    const nameCategory = categories.filter((item) => {
      return item.id === id;
    });
    return nameCategory[0] ? nameCategory[0].name : "";
  };

  return (
    <section className="card-car__card">
      <div className="card-car__card-main">
        {dataForm.thumbnail.value.path ? (
          <img src={dataForm.thumbnail.value.path} alt="carPhoto" />
        ) : (
          <div className="upload-img">
            <h3>Загрузите изображение</h3>
            <Upload />
          </div>
        )}
        <Modal active={activeModal}>
          <h2>Выберите изображение с расширением jpeg, jpg, png, svg</h2>
          <button
            onClick={() => setActiveModal(false)}
            className="success"
            type="button"
          >
            Понятно
          </button>
        </Modal>
        <Title title={dataForm.name.value} valid={dataForm.name.inputValid} />
        <Title
          className="category-title"
          title={getCategory(dataForm.categoryId.id)}
        />
        <div className="card-file">
          <input
            type="file"
            onChange={onImageChange}
            id="file"
            className="input"
            name="thumbnail"
          />
          <label htmlFor="file">
            <span id="file-name" className="file-box">
              {dataForm.thumbnail.value.name}
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
          <span>{dataForm.tank.value}%</span>
        </div>
        <input
          onChange={dataForm.tank.onChange}
          type="range"
          value={dataForm.tank.value}
          name="tank"
          id=""
        />
      </div>
      <div className="card-description">
        <h5>Описание</h5>
        <textarea
          placeholder="Введите описание"
          value={dataForm.description.value}
          name="description"
          onChange={dataForm.description.onChange}
        />
      </div>
    </section>
  );
};

export default Card;
