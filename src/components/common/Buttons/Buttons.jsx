import React from "react";
import Reject from "../../../images/Reject Icon.svg";
import Edit from "../../../images/Edit Icon.svg";

const Buttons = () => {
  return (
    <div className="buttons">
      <button type="button">
        <Edit /> Изменить
      </button>
      <button type="button">
        <Reject /> Удалить
      </button>
    </div>
  );
};

export default Buttons;
