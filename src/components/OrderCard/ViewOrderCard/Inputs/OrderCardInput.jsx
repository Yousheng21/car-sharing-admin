import React from "react";

const OrderCardInput = ({
  array,
  handleChange,
  dataForm,
  id,
  type,
  name,
  text,
}) => {
  switch (type) {
    case "select":
      return (
        <div className="select">
          <h5>{text}</h5>
          <select
            value={id ? dataForm[name].id : dataForm[name]}
            name={name}
            onChange={(event) => handleChange(event, array)}
            id={name}
          >
            <option value="">Выберите {text}</option>
            {array.map((el) => (
              <option key={id ? el.id : el} value={id ? el.id : el}>
                {id ? el.name : el}
              </option>
            ))}
          </select>
        </div>
      );
    case "number":
      return (
        <input
          className="number"
          type="number"
          onChange={handleChange}
          value={dataForm[name]}
          name={name}
          id={name}
        />
      );
    default:
      break;
  }
};

export default OrderCardInput;
