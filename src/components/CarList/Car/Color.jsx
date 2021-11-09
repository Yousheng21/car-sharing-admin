import React from "react";
import { objColors } from "../../../reducers/data/dataColors";

const Color = ({ color }) => {
  return (
    <div className="color">
      <span
        // Прописывание класса для каждого цвета заменяется одной строчкой
        style={{ backgroundColor: objColors[color] ?? "" }}
        className="circle"
      />
      <span>{color}</span>
    </div>
  );
};

export default Color;
