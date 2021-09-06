import React from "react";
import { objColors } from "../../../reducers/data/dataOrder";

const Color = ({ color }) => {
  return (
    <div className="color">
      <span
        style={{ backgroundColor: objColors[color] ?? "" }}
        className="circle"
      />
      <span>{color}</span>
    </div>
  );
};

export default Color;
