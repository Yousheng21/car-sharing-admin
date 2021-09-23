import React, { useEffect, useState } from "react";
import "./cardCar.scss";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../layouts/AppLayout/AppLayout";
import Settings from "./Settings/Settings";
import getCarModels, {
  getCategories,
  requestCarModel,
} from "../../actions/car";
import Card from "./Card";
import RefactorEntitiesLayout from "../layouts/RefactorEntitiesLayout/RefactorEntitiesLayout";
import { useInput } from "../../utils/Validator/useInput";
import { dataFormCar } from "../../reducers/data/dataCar";
import { getRequestObj } from "../../actions/app";

const CardCar = ({ page, match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.app.categories);
  const models = useSelector((state) => state.app.models);
  const currModelId = useSelector((state) => state.app.curModelId);

  const [stateMax, setStateMax] = useState(100000);
  const [stateMin, setStateMin] = useState(0);

  const [colors, setColors] = useState({
    value: dataFormCar.colors,
    inputValid: dataFormCar.colors.length,
  });
  const [thumbnail, setThumbnail] = useState({
    value: dataFormCar.thumbnail,
    inputValid: dataFormCar.thumbnail.localPath,
  });
  const [category, setCategory] = useState({
    value: dataFormCar.categoryId,
    inputValid: dataFormCar.categoryId.id,
  });

  const dataForm = {
    name: useInput(dataFormCar.name, {
      isEmpty: { value: false, text: "Пустое поле" },
      isModelName: {
        value: false,
        text: "Введите от 4-х букв латиницы, цифр или знаков -+(),.",
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
    categoryId: {
      value: category.value,
      setValue: setCategory,
      inputValid: category.inputValid,
    },
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

  const handleReset = () => {
    Object.keys(dataForm).forEach((key) => {
      if (dataForm[key].setValue) handleDataForm(key, dataFormCar[key], false);
      else dataForm[key].setChange(dataFormCar[key]);
    });
  };

  const handleRequest = (method, modelId) => {
    return dispatch(requestCarModel(method, getRequestObj(dataForm), modelId));
  };

  useEffect(() => {
    if (id && models.length) {
      const model = models.filter((item) => item.id === id)[0];
      Object.keys(model).forEach((key) => {
        if (dataForm[key]) {
          if (dataForm[key].setValue) {
            handleDataForm(key, model[key], !!model[key]);
          } else dataForm[key].setChange(model[key]);
        }
      });
    }
  }, [id]);

  useEffect(() => {
    const priceMax = dataForm.priceMax.value;
    if (priceMax) setStateMax(priceMax);
  }, [dataForm.priceMax.value]);

  useEffect(() => {
    const priceMin = dataForm.priceMin.value;
    if (priceMin) setStateMin(priceMin);
  }, [dataForm.priceMin.value]);

  useEffect(() => {
    if (!categories.length) dispatch(getCategories());
    if (!models.length) dispatch(getCarModels());
  }, [categories.length, models.length]);

  return (
    <AppLayout
      id={id}
      entityId={currModelId}
      entity="Машина"
      title="Карточка автомобиля"
      page={page}
    >
      <RefactorEntitiesLayout
        load={!categories.length}
        dataForm={dataForm}
        handleRequest={handleRequest}
        handleReset={handleReset}
        link="cardList"
        id={id}
      >
        <section className="card-car">
          <Card dataForm={dataForm} handleDataForm={handleDataForm} />
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
