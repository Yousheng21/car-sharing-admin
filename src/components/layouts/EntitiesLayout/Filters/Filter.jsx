import React from "react";

const Filter = ({ item, handleChange, dataForm }) => {
  switch (item.type) {
    case "select":
      return (
        <div className="select">
          <select
            value={dataForm[item.name]}
            name={item.name}
            onChange={handleChange}
            id={item.name}
          >
            {item.options.map((el) => (
              <option key={el.id} value={el.id}>
                {el.name}
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
          value={dataForm[item.name]}
          name={item.name}
          id={item.name}
          placeholder={item.text}
        />
      );
    default:
      break;
  }
};

export default Filter;
