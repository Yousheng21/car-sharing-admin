import React, { useEffect, useState } from "react";
import "./carList.scss";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../layouts/AppLayout/AppLayout";
import EntitiesLayout from "../layouts/EntitiesLayout/EntitiesLayout";
import getCarModels, {
  getCategories,
  requestCarModel,
} from "../../actions/car";
import { getDropdownCar } from "../../actions/app";
import Car from "./Car/Car";

const CarList = ({ page }) => {
  const dispatch = useDispatch();

  const [modelsPerPage] = useState(5);
  const [dropdown, setDropdown] = useState([]);

  const models = useSelector((state) => state.app.models);
  const newModels = useSelector((state) => state.app.newModels);
  const categories = useSelector((state) => state.app.categories);

  const [currentModels, setCurrentModels] = useState([]);

  useEffect(() => {
    if (!models.length) {
      dispatch(getCarModels());
      setCurrentModels(models.slice(0, modelsPerPage));
    }
  }, [models.length]);

  useEffect(() => {
    if (!categories.length) dispatch(getCategories());
    else setDropdown(getDropdownCar(models, categories));
  }, [categories.length]);

  const handleClick = (filters) => {
    dispatch(getCarModels(filters));
  };

  const handleDelete = (id) => {
    dispatch(requestCarModel("DELETE", {}, id));
  };

  const handleReset = () => {
    dispatch(getCarModels());
  };

  return (
    <AppLayout entity="Машина" title="Список авто" page={page}>
      <EntitiesLayout
        className="car-list"
        dropdown={dropdown}
        entities={newModels}
        storeEntities={models}
        viewEntities={currentModels}
        setEntities={setCurrentModels}
        handleClick={handleClick}
        stateFilters="filtersCar"
        perPage={modelsPerPage}
        reset={handleReset}
        titleLoader="Загрузка автомобилей..."
        handleDelete={handleDelete}
      >
        <Car />
      </EntitiesLayout>
    </AppLayout>
  );
};

export default CarList;
