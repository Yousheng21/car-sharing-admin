import React, { useState } from "react";

const Filter = ({ item, handleChange }) => {
  const [input, setInput] = useState("");

  switch (item.type) {
    case "select":
      return (
        <div className="select">
          <select name={item.name} onChange={handleChange} id={item.name}>
            {item.options.map((el) => (
              <option key={el.id} value={el.id}>
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
          onChange={(event) => {
            handleChange(event);
            setInput(event.target.value);
          }}
          value={input}
          name={item.name}
          id={item.name}
          placeholder={item.text}
        />
      );
  }
};

export default Filter;
