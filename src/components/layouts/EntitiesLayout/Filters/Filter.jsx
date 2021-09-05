import React, { useState } from "react";

const Filter = ({ item, handleChange }) => {
  const [input, setInput] = useState("");

  switch (item.type) {
    case "select":
      return (
        <select name={item.name} onChange={handleChange} id={item.name}>
          {item.options.map((el, index) => (
            // Некоторые модели имеют одинаковый id
            // eslint-disable-next-line react/no-array-index-key
            <option key={index} value={el.id}>
              {el.name}
            </option>
          ))}
        </select>
      );
    default:
      break;
    case "number":
      return (
        <input
          type="number"
          onChange={(event) => {
            handleChange(event);
            setInput(event.target.value);
          }}
          value={input}
          name={item.name}
          id={item.name}
        />
      );
  }
};

export default Filter;
