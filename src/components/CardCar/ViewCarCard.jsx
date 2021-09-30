import React, { useState } from "react";
import Upload from "../../images/Upload img.svg";
import Modal from "../common/Modal/Modal";
import { getBase64 } from "../../actions/app";
import Image from "../common/Image/Image";

const Title = ({ title, valid = true, className }) => {
  if (title && valid) return <h1 className={className}>{title}</h1>;
  return "";
};

const ImgCard = ({ thumbnail }) => {
  if (thumbnail.localPath)
    return <img src={thumbnail.localPath} alt="carPhoto" />;
  return <Image thumbnail={thumbnail} />;
};

const ViewCarCard = ({ dataForm }) => {
  const [activeModal, setActiveModal] = useState(false);

  const onImageChange = async (event) => {
    const { files } = event.target;
    if (files && files[0] && files[0].type.split("/")[0] === "image") {
      setActiveModal(false);

      const urlImage = await getBase64(files[0]);

      const value = {
        originalname: files[0].name,
        mimetype: files[0].type,
        size: files[0].size,
        path: urlImage,
        localPath: URL.createObjectURL(files[0]),
      };
      dataForm.thumbnail.setChange(value);
    } else setActiveModal(true);
  };

  return (
    <section className="card-car__card">
      <div className="card-car__card-main">
        {dataForm.thumbnail.value.path ? (
          <ImgCard thumbnail={dataForm.thumbnail.value} />
        ) : (
          <div className="upload-img">
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
          title={!!dataForm.categoryId.value && dataForm.categoryId.value.name}
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
              {dataForm.thumbnail.value.originalname}
            </span>
            <div className="file-button">
              <span>Обзор</span>
            </div>
          </label>
        </div>
      </div>
      <div className="card-progress">
        <div className="card-progress__info">
          <span>Уровень топлива</span>
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

export default ViewCarCard;
