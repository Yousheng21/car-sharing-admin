import React from "react";
import Reject from "../../../../images/Delete.svg";

const ViewColors = ({ colors }) => {
  const handleDelete = (color) => {
    colors.setChange(
      colors.value.filter((item) => {
        return item !== color;
      })
    );
  };

  return (
    <div className="view-colors">
      {colors.value.map((color) => (
        <label key={color} htmlFor={color}>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            name="colors"
            id={color}
            checked
            readOnly
          />
          {color}
          <button
            className="delete"
            onClick={() => handleDelete(color)}
            type="button"
          >
            <Reject />
          </button>
        </label>
      ))}
      <span className="error">{colors.printError(["isEmptyArray"])}</span>
    </div>
  );
};

export default ViewColors;
