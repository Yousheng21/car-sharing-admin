import React, { useState } from "react";
import classNames from "classnames";
import Plus from "../../../../images/Plus.svg";
import Reject from "../../../../images/Delete.svg";
import { regExpTab } from "../../../../reducers/data/regExp";

const Colors = ({ colors, currColor, setColors }) => {
  const [activeColor, setActiveColor] = useState(null);
  const handleClick = () => {
    if (
      colors.some(
        (item) =>
          item.replace(regExpTab, "") === currColor.value.replace(regExpTab, "")
      ) ||
      !currColor.value
    )
      return false;
    setColors([...colors, currColor.value]);
    currColor.setChange("");
  };

  const handlePressKey = (event) => {
    if (event.key !== "Enter" || !currColor.inputValid) return false;
    handleClick();
  };

  const handleDelete = (color) => {
    setColors(
      colors.filter((item) => {
        return item !== color;
      })
    );
  };
  return (
    <div className="div-colors">
      <span title="обязательное поле">Доступные цвета *</span>
      <div>
        <input
          value={currColor.value}
          onChange={currColor.onChange}
          onBlur={currColor.onBlur}
          onFocus={currColor.onFocus}
          type="text"
          name=""
          id="colors"
          onKeyDown={handlePressKey}
          className={classNames({
            error: currColor.isDirty && !currColor.inputValid,
          })}
        />
        <button
          disabled={!currColor.inputValid}
          onClick={handleClick}
          type="button"
        >
          <Plus />
        </button>
      </div>
      <span className="error">
        {currColor.isDirty && currColor.printError(["isColor"])}
      </span>
      <div className="view-colors">
        {colors.map((color, index) => (
          <label
            key={color}
            onFocus={() => setActiveColor(index)}
            onMouseOver={() => setActiveColor(index)}
            onBlur={() => setActiveColor(null)}
            onMouseOut={() => setActiveColor(null)}
            htmlFor={color}
          >
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
              className={classNames({
                delete: true,
                active: index === activeColor,
              })}
              onClick={() => handleDelete(color)}
              type="button"
            >
              <Reject />
            </button>
          </label>
        ))}
        <span className="error">
          {currColor.isDirty && !colors.length
            ? "Введите хотя бы один цвет"
            : ""}
        </span>
      </div>
    </div>
  );
};

export default Colors;
