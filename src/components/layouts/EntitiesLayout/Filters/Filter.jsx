import React from "react";
import { objColors } from "../../../../reducers/data/dataColors";

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
              <option
                style={{ backgroundColor: objColors[el.name] ?? "" }}
                key={el.id}
                value={el.id}
              >
                {el.name}
              </option>
            ))}
          </select>
        </div>
      );
    default:
      break;
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
  }
};

export default Filter;
