import React from "react";
import "./filters.scss";
import Filter from "./Filter";

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
          <div key={item.name} className="filter">
            <Filter item={item} handleChange={handleChange} />
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
