import React from "react";
import "./filters.scss";
import { useDispatch } from "react-redux";
import Filter from "./Filter";
import { setIsUpdated } from "../../../../reducers/appReducer";

const Filters = ({
  paginate,
  dropdown,
  handleChange,
  handleClick,
  resetFilters,
  dataForm,
}) => {
  const dispatch = useDispatch();

  const handleFiltersClick = () => {
    dispatch(setIsUpdated(true));
    paginate(1);
  };

  return (
    <section className="parameters">
      <div className="dropdown">
        {dropdown.map((item) => (
          <div key={item.name} className="filter">
            <Filter
              item={item}
              dataForm={dataForm}
              handleChange={handleChange}
            />
          </div>
        ))}
      </div>
      <div className="parameters-buttons">
        <button
          type="button"
          onClick={() => {
            handleFiltersClick();
            resetFilters();
          }}
          className="btn reset"
        >
          Сбросить
        </button>
        <button
          onClick={() => {
            handleFiltersClick();
            handleClick(dataForm);
          }}
          type="button"
          className="btn apply"
        >
          Применить
        </button>
      </div>
    </section>
  );
};

export default Filters;
