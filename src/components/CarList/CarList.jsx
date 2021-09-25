import React, { useEffect, useState } from "react";
import "./carList.scss";
import { useDispatch } from "react-redux";
import AppLayout from "../layouts/AppLayout/AppLayout";
import EntitiesLayout from "../layouts/EntitiesLayout/EntitiesLayout";
import getCarModels, {
  getCategories,
  requestCarModel,
} from "../../actions/car";
import { getDropdownCar } from "../../actions/app";
import Car from "./Car/Car";
import ListSelector from "../../utils/listSelector";

const modelsPerPage = 5;

const CarList = ({ page }) => {
  const dispatch = useDispatch();

  const [dropdown, setDropdown] = useState([]);
  const [currentModels, setCurrentModels] = useState([]);

  const { models, newModels, categories, currModelId } = ListSelector();

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
    <AppLayout
      entity="Машина"
      entityId={currModelId}
      title="Список авто"
      page={page}
    >
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
        linkRefactor="cardCar"
      >
        <Car />
      </EntitiesLayout>
    </AppLayout>
  );
};

export default CarList;
