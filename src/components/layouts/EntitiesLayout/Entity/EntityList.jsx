import React, { useState } from "react";
import "./entity.scss";
import Buttons from "../../../common/Buttons/Buttons";
import Modal from "../../../common/Modal/Modal";

const EntityList = ({ entity, children, handleDelete }) => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const childrenWithExtraProp = React.Children.map(children, (child) => {
    return React.cloneElement(child, { entity });
  });
  return (
    <section className="list-entity">
      {childrenWithExtraProp}
      <Buttons setModal={setModalIsActive} link={`cardCar/${entity.id}`} />
      <Modal active={modalIsActive}>
        <h1>Подтвердите удаление</h1>
        <div>
          <button type="button" onClick={() => setModalIsActive(false)}>
            Отменить
          </button>
          <button
            onClick={() => handleDelete(entity.id)}
            className="delete"
            type="button"
          >
            Удалить
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default EntityList;
