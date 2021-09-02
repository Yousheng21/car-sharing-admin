import React from "react";
import "./input.scss";

const Input = ({
  value,
  setValue,
  type,
  placeholder,
  onBlur,
  onFocus,
  id,
  label,
  error,
}) => {
  return (
    <div className="input">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-control"
        onChange={setValue}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        type={type}
        placeholder={placeholder}
        id={id}
        autoComplete="off"
      />
      <span className="error">{error ?? ""}</span>
    </div>
  );
};

export default Input;
