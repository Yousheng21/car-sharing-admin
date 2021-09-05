import React, { useEffect, useState } from "react";
import "./carList.scss";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../layouts/AppLayout/AppLayout";
import Order from "../OrderList/Order/Order";
import EntitiesLayout from "../layouts/EntitiesLayout/EntitiesLayout";
import getCarModels, { getCategories } from "../../actions/car";
import { getDropdownCar } from "../../actions/app";

const CarList = ({ page }) => {
  const dispatch = useDispatch();

  const [modelsPerPage] = useState(5);
  const [dropdown, setDropdown] = useState([]);
  const [dataForm, setDataForm] = useState({
    id: "",
    categoryId: "",
    "priceMax[$lt]": "",
    "priceMin[$gt]": "",
    colors: "",
  });
  const models = useSelector((state) => state.app.models);
  const newModels = useSelector((state) => state.app.models);
  const categories = useSelector((state) => state.app.categories);

  const [currentModels, setCurrentModels] = useState(
    models.slice(0, modelsPerPage)
  );

  useEffect(() => {
    if (!models.length) {
      dispatch(getCarModels());
    } else setCurrentModels(models.slice(0, modelsPerPage));
  }, [models.length]);

  useEffect(() => {
    if (!categories.length) dispatch(getCategories());
    else setDropdown(getDropdownCar(models, categories));
  }, [categories.length]);

  const handleClick = (filters) => {
    dispatch(getCarModels(filters));
  };
  return (
    <AppLayout title="Список авто" page={page}>
      <EntitiesLayout
        className="car-list"
        dropdown={dropdown}
        dataForm={dataForm}
        entities={newModels}
        setEntities={setCurrentModels}
        handleClick={handleClick}
        setDataForm={setDataForm}
        orderPerPage={modelsPerPage}
      >
        <Order storeModels={models} models={currentModels} />
      </EntitiesLayout>
    </AppLayout>
  );
};

export default CarList;
