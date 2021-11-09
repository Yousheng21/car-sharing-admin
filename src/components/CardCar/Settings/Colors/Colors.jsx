import React from "react";
import classNames from "classnames";
import Plus from "../../../../images/Plus.svg";
import { regExpTab } from "../../../../reducers/data/regExp";
import { useInput } from "../../../../utils/Validator/useInput";

const Colors = ({ colors }) => {
  const currColor = useInput("", {
    isColor: { value: false, text: "только кириллица от 3-х символов" },
  });

  const handleClick = () => {
    if (
      colors.value.some(
        (item) =>
          item.replace(regExpTab, "") === currColor.value.replace(regExpTab, "")
      ) ||
      !currColor.value
    )
      return false;
    colors.setChange([...colors.value, currColor.value]);
    currColor.setChange("");
  };

  const handlePressKey = (event) => {
    if (event.key !== "Enter" || !currColor.inputValid) return false;
    handleClick();
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
    </div>
  );
};

export default Colors;
