import React from "react";
import { Link } from "react-router-dom";
import Reject from "../../../images/Reject Icon.svg";
import Edit from "../../../images/Edit Icon.svg";
import "./buttons.scss";

const Buttons = ({ link }) => {
  return (
    <div className="buttons">
      <Link to={`/car-sharing-admin/${link}`}>
        <button type="button">
          <Edit />
        </button>
      </Link>
      <button type="button">
        <Reject />
      </button>
    </div>
  );
};

export default Buttons;
