import React from "react";
import classNames from "classnames";

const OrderCardInput = ({
  array,
  handleChange,
  dataForm,
  isId,
  property,
  typeInput,
  id,
  text,
  view,
  onBlur,
  viewError,
  blur,
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

  switch (typeInput) {
    case "select":
      return (
        <div className="select">
          <h6 className="necess" title="обязательное поле">
            {text} *
          </h6>
          <div>
            <select
              value={isId ? dataForm[id].value.id : dataForm[id].value}
              name={id}
              onChange={handleInputChange}
              id={id}
              className={classNames({
                error: isId ? !dataForm[id].value.id : !dataForm[id].value,
              })}
            >
              <option value="">Выберите {text}</option>
              {array.map((item) => (
                <option
                  key={isId ? item.id : item}
                  value={isId ? item.id : item}
                >
                  {view ? view(item) : viewText(item)}
                </option>
              ))}
            </select>
          </div>
        </div>
      );
    case "number":
      return (
        <label className="number" htmlFor={id}>
          <h6 className="necess" title="обязательное поле">
            {text} *
          </h6>
          <input
            className={classNames({
              number: true,
              error: !dataForm[id].inputValid,
            })}
            type="number"
            onChange={dataForm[id].onChange}
            value={dataForm[id].value}
            name={id}
            id={id}
            onBlur={() => onBlur(true)}
          />
          {blur && !dataForm[id].inputValid && (
            <span className="error">{viewError}</span>
          )}
        </label>
      );
    default:
      break;
  }
};

export default OrderCardInput;
