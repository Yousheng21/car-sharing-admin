import React, { useEffect, useState } from "react";
import "./carList.scss";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../layouts/AppLayout/AppLayout";
import EntitiesLayout from "../layouts/EntitiesLayout/EntitiesLayout";
import getCarModels, { getCategories } from "../../actions/car";
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

  const reset = () => {
    dispatch(getCarModels());
  };

  return (
    <AppLayout title="Список авто" page={page}>
      <EntitiesLayout
        className="car-list"
        dropdown={dropdown}
        entities={newModels}
        storeEntities={models}
        setEntities={setCurrentModels}
        handleClick={handleClick}
        stateFilters="filtersCar"
        perPage={modelsPerPage}
        reset={reset}
        titleLoader="Загрузка автомобилей..."
      >
        <Car models={currentModels} />
      </EntitiesLayout>
    </AppLayout>
  );
};

export default CarList;
