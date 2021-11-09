import React from "react";
import classNames from "classnames";
import "./input.scss";

const Input = ({
  title,
  objInput,
  arrValid,
  id,
  number,
  necessarily,
  type,
}) => {
  const handleChange = (event) => {
    const { value } = event.currentTarget;
    if (number) {
      if (Number(value)) objInput.setChange(Number(value));
      else if (!value) objInput.setChange("");
    } else objInput.onChange(event);
  };
  return (
    <div
      className={classNames({
        input: true,
        error: (objInput.value || objInput.isDirty) && !objInput.inputValid,
      })}
    >
      <label htmlFor={id}>
        {necessarily ? (
          <h6 className="necess" title="обязательное поле">
            {title} *
          </h6>
        ) : (
          title
        )}
        <input
          onChange={handleChange}
          onBlur={objInput.onBlur}
          onFocus={objInput.onFocus}
          type={type}
          value={objInput.value}
          name={id}
          id={id}
        />
      </label>
      <span>
        {(objInput.value || objInput.isDirty) && objInput.printError(arrValid)}
      </span>
    </div>
  );
};

export default Input;
