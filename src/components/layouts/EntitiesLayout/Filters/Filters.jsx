import React from "react";
import "./filters.scss";

const Filters = ({
  paginate,
  dropdown,
  handleChange,
  handleClick,
  dataForm,
}) => {
  return (
    <section className="parameters">
      <div className="dropdown">
        {dropdown.map((item) => (
          <div key={item.name} className="select">
            <select name={item.name} onChange={handleChange} id={item.name}>
              {item.options.map((el, index) => (
                // Некоторые модели имеют одинаковый id
                // eslint-disable-next-line react/no-array-index-key
                <option key={index} value={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          handleClick(dataForm);
          paginate(1);
        }}
        type="button"
        className="btn"
      >
        Применить
      </button>
    </section>
  );
};

export default Filters;
