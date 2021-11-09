import React, { useEffect, useState } from "react";
import "./cardCar.scss";
import { useDispatch } from "react-redux";
import AppLayout from "../layouts/AppLayout/AppLayout";
import ViewCarSettings from "./Settings/ViewCarSettings";
import getCarModels, {
  getCategories,
  requestCarModel,
} from "../../actions/car";
import ViewCarCard from "./ViewCarCard";
import RefactorEntitiesLayout from "../layouts/RefactorEntitiesLayout/RefactorEntitiesLayout";
import { useInput } from "../../utils/Validator/useInput";
import { dataFormCar } from "../../reducers/data/dataCar";
import { getRequestObj } from "../../actions/app";
import ListSelector from "../../utils/listSelector";

const CardCar = ({ page, match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();

  const { categories, models } = ListSelector();

  const [stateMax, setStateMax] = useState(0);
  const [stateMin, setStateMin] = useState(0);

  const dataForm = {
    name: useInput(dataFormCar.name, {
      isEmpty: { value: false, text: "Пустое поле" },
      isModelName: {
        value: false,
        text: "от 4-х букв и доступных знаков -+(),.",
      },
    }),
    priceMin: useInput(
      dataFormCar.priceMin,
      {
        minError: { value: false, text: "Введите натуральное число", min: 0 },
        maxError: {
          value: false,
          text: "Введие число меньше макс цены",
          max: stateMax,
        },
      },
      [stateMax]
    ),
    priceMax: useInput(
      dataFormCar.priceMax,
      {
        isEmpty: {
          value: false,
          text: "Пустое поле",
        },
        minError: {
          value: false,
          text: "Введите число больше мин цены",
          min: stateMin,
        },
      },
      [stateMin]
    ),
    thumbnail: useInput(dataFormCar.thumbnail, {
      isEmptyImage: { value: false, text: "" },
    }),
    description: useInput(dataFormCar.description, {}),
    tank: useInput(dataFormCar.tank, {}),
    categoryId: useInput(dataFormCar.categoryId, {
      isEmptySelect: { value: false, text: "" },
    }),
    colors: useInput(dataFormCar.colors, {
      isEmptyArray: { value: false, text: "Введите хотя бы один цвет" },
    }),
    number: useInput(dataFormCar.number, {}),
  };
  useEffect(() => {
    if (!categories.length) dispatch(getCategories());
    if (!models.length) dispatch(getCarModels());
  }, [categories.length, models.length]);

  useEffect(() => {
    const priceMax = dataForm.priceMax.value;
    if (priceMax) setStateMax(priceMax);
  }, [dataForm.priceMax.value]);

  useEffect(() => {
    const priceMin = dataForm.priceMin.value;
    if (priceMin) setStateMin(priceMin);
  }, [dataForm.priceMin.value]);

  const handleRequest = (method, modelId) => {
    return dispatch(requestCarModel(method, getRequestObj(dataForm), modelId));
  };

  return (
    <AppLayout id={id} entity="Машина" title="Карточка автомобиля" page={page}>
      <RefactorEntitiesLayout
        load={!categories.length}
        dataForm={dataForm}
        handleRequest={handleRequest}
        stateDataForm={dataFormCar}
        entity={models}
        link="cardList"
        id={id}
      >
        <section className="card-car">
          <ViewCarCard dataForm={dataForm} />
          <ViewCarSettings dataForm={dataForm} categories={categories} />
        </section>
      </RefactorEntitiesLayout>
    </AppLayout>
  );
};

export default CardCar;
