import React from "react";
import { Link } from "react-router-dom";

const RefactorEntitiesButtons = ({
  handleDisable,
  id,
  handleRequest,
  handleReset,
  link,
}) => {
  if (id)
    return (
      <div className="refactor-entities__buttons">
        <button
          disabled={handleDisable()}
          onClick={() => handleRequest("PUT", id)}
          className="edit"
          type="button"
        >
          Сохранить
        </button>
        <Link to={`/car-sharing-admin/${link}`}>
          <button className="back" type="button">
            Отменить
          </button>
        </Link>
        <button
          onClick={() => {
            handleRequest("DELETE", id);
            handleReset();
          }}
          className="delete"
          type="button"
        >
          Удалить
        </button>
      </div>
    );
  return (
    <div className="refactor-entities__buttons add">
      <button
        disabled={handleDisable()}
        onClick={() => handleRequest("POST")}
        className="edit add"
        type="button"
      >
        Добавить
      </button>
      <button onClick={handleReset} className="back" type="button">
        Сбросить
      </button>
    </div>
  );
};

export default RefactorEntitiesButtons;
