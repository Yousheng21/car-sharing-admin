import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import RefactorEntitiesLayout from "../layouts/RefactorEntitiesLayout/RefactorEntitiesLayout";
import AppLayout from "../layouts/AppLayout/AppLayout";
import { setOrderTable } from "../../actions/order";
import "./orderCard.scss";
import ViewOrderCard from "./ViewOrderCard/ViewOrderCard";
import {
  dataFormOrder,
  dataFormOrderWithHook,
} from "../../reducers/data/dataOrder";
import ViewOrderSetting from "./ViewOrderCard/ViewOrderSetting";
import getCarModels from "../../actions/car";
import getTariffs from "../../actions/tariff";
import getPoints from "../../actions/point";
import { getRequestObj } from "../../actions/app";
import ListSelector from "../../utils/listSelector";
import { useInput } from "../../utils/Validator/useInput";

const OrderCard = ({ page, match }) => {
  const dispatch = useDispatch();
  const { id } = match.params;

  const [stateDateFrom, setDateFrom] = useState(0);
  const [stateMin, setStateMin] = useState(0);
  const [stateMax, setStateMax] = useState(0);

  const { models, orders, points, tariffs } = ListSelector();

  const dataForm = {
    ...dataFormOrderWithHook(),
    dateTo: useInput(
      0,
      {
        minError: { value: false, text: "", min: stateDateFrom },
      },
      [stateDateFrom]
    ),
    price: useInput(
      dataFormOrder.price.value,
      {
        isEmpty: { value: false, text: "Введите натуральное число" },
        rangeError: {
          value: false,
          text:
            !stateMax && !stateMin
              ? "Выберите модель"
              : `Введите число от ${stateMin} до ${stateMax}`,
          min: stateMin,
          max: stateMax,
        },
      },
      [stateMin, stateMax]
    ),
  };

  useEffect(() => {
    if (!models.length) dispatch(getCarModels());
    if (!tariffs.length) dispatch(getTariffs());
    if (!points.length) dispatch(getPoints());
  }, [models.length, points.length, tariffs.length]);

  useEffect(() => {
    if (dataForm.pointId.value.id && dataForm.pointId.value.cityId)
      dataForm.cityId.setChange(dataForm.pointId.value.cityId);
  }, [dataForm.pointId.value]);

  useEffect(() => {
    const { carId, color } = dataForm;
    if (carId.value.id) {
      if (carId.value.colors.length) {
        if (!carId.value.colors.some((item) => item === color.value))
          color.setChange("");
      } else color.setChange("Любой");
      setStateMin(carId.value.priceMin);
      setStateMax(carId.value.priceMax);
    }
  }, [dataForm.carId.value]);

  useEffect(() => {
    setDateFrom(dataForm.dateFrom.value);
  }, [dataForm.dateFrom.value]);

  const handleRequest = (method, requestId) => {
    return dispatch(setOrderTable(method, getRequestObj(dataForm), requestId));
  };

  const handleSelect = (event, array) => {
    const { value, name } = event.currentTarget;
    const element = array.find((item) => {
      return item.id === value;
    });
    dataForm[name].setChange(element ?? dataFormOrder[name]);
  };

  return (
    <AppLayout kind id={id} entity="Заказ" title="Карточка заказа" page={page}>
      <RefactorEntitiesLayout
        load={!models.length || !points.length || !tariffs.length}
        dataForm={dataForm}
        handleRequest={handleRequest}
        stateDataForm={dataFormOrder}
        entity={orders}
        link="orderList"
        id={id}
      >
        <section className="order-card">
          <ViewOrderCard
            models={models}
            points={points}
            dataForm={dataForm}
            handleSelect={handleSelect}
          />
          <ViewOrderSetting
            dataForm={dataForm}
            tariffs={tariffs}
            handleSelect={handleSelect}
          />
        </section>
      </RefactorEntitiesLayout>
    </AppLayout>
  );
};

export default OrderCard;
