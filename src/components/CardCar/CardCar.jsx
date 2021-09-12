import React, { useEffect, useState } from "react";
import "./cardCar.scss";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../layouts/AppLayout/AppLayout";
import Settings from "./Settings/Settings";
import getCarModels, { getCategories } from "../../actions/car";
import Card from "./Card";
import Preloader from "../common/Preloader/Preloader";
import RefactorEntitiesLayout from "../layouts/RefactorEntitiesLayout/RefactorEntitiesLayout";
import { useInput } from "../../utils/Validator/useInput";
import { dataFormCar } from "../../reducers/data/dataCar";

const CardCar = ({ page }) => {
  const dispatch = useDispatch();

  const [stateMax, setStateMax] = useState(1);
  const [colors, setColors] = useState([]);

  const modelName = useInput(dataFormCar.name, {
    isEmpty: { value: false, text: "Пустое поле" },
    isModelName: {
      value: false,
      text: "Введите от 4-х символов латиницы или цифр",
    },
  });
  const currColor = useInput("", {
    isColor: { value: false, text: "только кириллица от 3-х символов" },
  });
  const priceMin = useInput(dataFormCar.priceMin, {
    minError: { value: false, text: "Введите натуральное число", min: 0 },
    maxError: {
      value: false,
      text: "Введие число меньше макс цены",
      max: stateMax,
    },
  });
  const priceMax = useInput(dataFormCar.priceMax, {
    isEmpty: {
      value: false,
      text: "Пустое поле",
    },
    minError: {
      value: false,
      text: "Введие число больше мин цены",
      min: priceMin.value,
    },
  });
  const description = useInput(dataFormCar.description, {});
  const tank = useInput(dataFormCar.tank, {});
  const [category, setCategory] = useState(dataFormCar.categoryId);

  const car = useSelector((state) => state.app.models[0]);
  const categories = useSelector((state) => state.app.categories);

  useEffect(() => {
    setStateMax(priceMax.value);
  }, [priceMax.value]);

  useEffect(() => {
    if (!car) dispatch(getCarModels());
    if (!categories.length) dispatch(getCategories());
  }, [car, categories.length]);

  if (!car || !categories.length) return <Preloader title="Загрузка..." />;
  return (
    <AppLayout title="Карточка автомобиля" page={page}>
      <RefactorEntitiesLayout
        arrValid={[
          modelName.inputValid,
          currColor.inputValid,
          category.id,
          priceMin.inputValid,
          priceMax.inputValid,
          colors.length,
        ]}
      >
        <section className="card-car">
          <Card
            tank={tank}
            description={description}
            category={category}
            modelName={modelName}
          />
          <Settings
            currColor={currColor}
            colors={colors}
            setColors={setColors}
            priceMin={priceMin}
            priceMax={priceMax}
            category={category}
            setCategory={setCategory}
            car={car}
            categories={categories}
            modelName={modelName}
          />
        </section>
      </RefactorEntitiesLayout>
    </AppLayout>
  );
};

export default CardCar;
