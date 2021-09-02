import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getCities from "../../../actions/city";
import getCarModels from "../../../actions/car";
import { getDropdown } from "../../../actions/app";
import getOrders from "../../../actions/order";

const Filters = ({ paginate }) => {
  const dispatch = useDispatch();

  const [dropdown, setDropdown] = useState([]);

  const [dataForm, setDataForm] = useState({
    dateFrom: "",
    carId: "",
    cityId: "",
    orderStatusId: "",
  });

  const cities = useSelector((state) => state.app.cities);
  const models = useSelector((state) => state.app.models);

  useEffect(() => {
    if (!cities.length && !models.length) {
      dispatch(getCities());
      dispatch(getCarModels());
    } else setDropdown(getDropdown(models, cities));
  }, [cities.length, models.length]);

  const handleChange = (event) => {
    const { value, name } = event.currentTarget;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  return (
    <section className="parameters">
      <div className="dropdown">
        {dropdown.map((item) => (
          <div key={item.name} className="select">
            <select name={item.name} onChange={handleChange} id={item.name}>
              {item.options.map((el, index) => (
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
          dispatch(getOrders(dataForm));
          paginate(1);
        }}
        type="button"
        className="btn btn-primary"
      >
        Применить
      </button>
    </section>
  );
};

export default Filters;
