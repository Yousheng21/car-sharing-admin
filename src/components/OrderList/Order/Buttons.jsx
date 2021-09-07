import React from "react";
import Check from "../../../images/Check Icon.svg";
import Reject from "../../../images/Reject Icon.svg";
import Edit from "../../../images/Edit Icon.svg";

const Buttons = () => {
  return (
    <div className="buttons">
      <button type="button">
        <Check /> Готово
      </button>
      <button type="button">
        <Reject /> Отмена
      </button>
      <button type="button">
        <Edit /> Изменить
      </button>
    </div>
  );
};

export default Buttons;
