import React from "react";
import "./input.scss";
import classNames from "classnames";

const InputSelect = ({
  array,
  handleChange,
  dataForm,
  isId,
  property,
  placeholder,
  id,
  text,
  view,
}) => {
  const viewText = (item) => {
    if (isId) {
      if (item.name) return item.name;
      return item[property].name;
    }
    return item;
  };
  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    if (isId) handleChange(event, array);
    else dataForm[name].setChange(value);
  };

  return (
    <div className="select">
      <h6 className="necess" title="обязательное поле">
        {text} *
      </h6>
      <div className="select-body">
        <select
          value={isId ? dataForm[id].value.id : dataForm[id].value}
          name={id}
          onChange={handleInputChange}
          id={id}
          className={classNames({
            error: isId ? !dataForm[id].value.id : !dataForm[id].value,
          })}
        >
          <option value="">{placeholder}</option>
          {array.map((item) => (
            <option key={isId ? item.id : item} value={isId ? item.id : item}>
              {view ? view(item) : viewText(item)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputSelect;
