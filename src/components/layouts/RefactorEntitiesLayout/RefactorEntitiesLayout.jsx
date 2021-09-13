import React from "react";
import "./refactorEntitiesLayout.scss";

const RefactorEntitiesLayout = ({ children, dataForm, handleSave }) => {
  const handleDisable = () => {
    return Object.keys(dataForm).some((item) => {
      return !dataForm[item].inputValid;
    });
  };

  return (
    <section className="refactor-entities">
      {children}
      <div className="refactor-entities__buttons">
        <button
          disabled={handleDisable()}
          onClick={handleSave}
          className="edit"
          type="button"
        >
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
