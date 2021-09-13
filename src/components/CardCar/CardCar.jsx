import React, { useEffect, useState } from "react";
import "./cardCar.scss";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../layouts/AppLayout/AppLayout";
import Settings from "./Settings/Settings";
import getCarModels, { getCategories } from "../../actions/car";
import Card from "./Card";
// import Preloader from "../common/Preloader/Preloader";
import RefactorEntitiesLayout from "../layouts/RefactorEntitiesLayout/RefactorEntitiesLayout";
import { useInput } from "../../utils/Validator/useInput";

const CardCar = ({ page }) => {
  const dispatch = useDispatch();

  const dataFormCar = useSelector((state) => state.app.dataFormCar);

  const car = useSelector((state) => state.app.models[0]);
  const categories = useSelector((state) => state.app.categories);

  const [stateMax, setStateMax] = useState(1);
  const [stateMin, setStateMin] = useState(0);

  const [colors, setColors] = useState({
    value: dataFormCar.colors,
    inputValid: dataFormCar.colors.length,
  });
  const [thumbnail, setThumbnail] = useState({
    value: {
      name: dataFormCar.thumbnail.name,
      path: dataFormCar.thumbnail.path,
    },
    inputValid: dataFormCar.thumbnail.path,
  });

  const dataForm = {
    name: useInput(dataFormCar.name, {
      isEmpty: { value: false, text: "Пустое поле" },
      isModelName: {
        value: false,
        text: "Введите от 4-х символов латиницы или цифр",
      },
    }),
    priceMin: useInput(dataFormCar.priceMin, {
      minError: { value: false, text: "Введите натуральное число", min: 0 },
      maxError: {
        value: false,
        text: "Введие число меньше макс цены",
        max: stateMax,
      },
    }),
    priceMax: useInput(dataFormCar.priceMax, {
      isEmpty: {
        value: false,
        text: "Пустое поле",
      },
      minError: {
        value: false,
        text: "Введие число больше мин цены",
        min: stateMin,
      },
    }),
    thumbnail: {
      value: thumbnail.value,
      setValue: setThumbnail,
      inputValid: thumbnail.inputValid,
    },
    description: useInput(dataFormCar.description, {}),
    tank: useInput(dataFormCar.tank, {}),
    categoryId: useInput(dataFormCar.categoryId.id, {
      isEmpty: { value: false, text: "" },
    }),
    colors: {
      value: colors.value,
      setValue: setColors,
      inputValid: colors.inputValid,
    },
  };

  const handleDataForm = (name, value, valid) => {
    dataForm[name].setValue({
      ...dataForm[name],
      value,
      inputValid: !!valid,
    });
  };

  const handleSave = () => {
    console.log(dataForm);
  };

  useEffect(() => {
    setStateMax(dataForm.priceMax.value);
  }, [dataForm.priceMax.value]);

  useEffect(() => {
    setStateMin(dataForm.priceMin.value);
  }, [dataForm.priceMin.value]);

  useEffect(() => {
    if (!car) dispatch(getCarModels());
    if (!categories.length) dispatch(getCategories());
  }, [car, categories.length]);
  // if (!car || !categories.length) return <Preloader title="Загрузка..." />;
  return (
    <AppLayout title="Карточка автомобиля" page={page}>
      <RefactorEntitiesLayout dataForm={dataForm} handleSave={handleSave}>
        <section className="card-car">
          <Card
            categories={categories}
            dataForm={dataForm}
            handleDataForm={handleDataForm}
          />
          <Settings
            dataForm={dataForm}
            handleDataForm={handleDataForm}
            categories={categories}
          />
        </section>
      </RefactorEntitiesLayout>
    </AppLayout>
  );
};

export default CardCar;
