import React from "react";
import Reject from "../../../images/Reject Icon.svg";
import Edit from "../../../images/Edit Icon.svg";
import "./buttons.scss";

const Buttons = () => {
  return (
    <div className="buttons">
      <button type="button">
        <Edit />
      </button>
      <button type="button">
        <Reject />
      </button>
    </div>
  );
};

export default Buttons;
