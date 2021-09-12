import React from "react";
import "./refactorEntitiesLayout.scss";

const RefactorEntitiesLayout = ({ children, arrValid }) => {
  const handleDisable = () => {
    return arrValid.some((item) => {
      return !item;
    });
  };
  return (
    <section className="refactor-entities">
      {children}
      <div className="refactor-entities__buttons">
        <button disabled={handleDisable()} className="edit" type="button">
          Сохранить
        </button>
        <button className="back" type="button">
          Отменить
        </button>
        <button className="delete" type="button">
          Удалить
        </button>
      </div>
    </section>
  );
};

export default RefactorEntitiesLayout;
