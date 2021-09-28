import React from "react";
import classNames from "classnames";
import "./input.scss";

const Input = ({ title, objInput, arrValid, id, type, necessarily }) => {
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
          onChange={objInput.onChange}
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
