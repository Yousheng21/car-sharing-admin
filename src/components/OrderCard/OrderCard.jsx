import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RefactorEntitiesLayout from "../layouts/RefactorEntitiesLayout/RefactorEntitiesLayout";
import AppLayout from "../layouts/AppLayout/AppLayout";
import { setOrderTable } from "../../actions/order";
import "./orderCard.scss";
import ViewOrderCard from "./ViewOrderCard/ViewOrderCard";
import { dataFormOrder } from "../../reducers/data/dataOrder";
import ViewOrderSetting from "./ViewOrderCard/ViewOrderSetting";
import getCarModels from "../../actions/car";
import getTariffs from "../../actions/tariff";
import getPoints from "../../actions/point";
import { getRequestObj } from "../../actions/app";

const OrderCard = ({ page, match }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const [dataForm, setDataForm] = useState(dataFormOrder);

  const orderId = useSelector((state) => state.app.orderId);
  const models = useSelector((state) => state.app.models);
  const orders = useSelector((state) => state.app.orders);
  const points = useSelector((state) => state.app.points);
  const tariffs = useSelector((state) => state.app.tariffs);

  useEffect(() => {
    if (!models.length) dispatch(getCarModels());
    if (!tariffs.length) dispatch(getTariffs());
    if (!points.length) dispatch(getPoints());
  }, [models.length, points.length, tariffs.length]);

  const handleRequest = (method, requestId) => {
    return dispatch(setOrderTable(method, getRequestObj(dataForm), requestId));
  };

  const handleChange = (name, value, valid) => {
    setDataForm({
      ...dataForm,
      [name]: {
        value,
        inputValid: !!valid,
      },
    });
  };

  useEffect(() => {
    if (dataForm.pointId.value.id)
      handleChange("cityId", dataForm.pointId.value.cityId, true);
  }, [dataForm.pointId.value]);

  useEffect(() => {
    if (dataForm.carId.value.id && dataForm.carId.value.colors.length)
      handleChange("color", "", false);
  }, [dataForm.carId.value]);

  useEffect(() => {
    if (dataForm.dateTo.value <= dataForm.dateFrom.value) {
      handleChange("dateFrom", dataForm.dateFrom.value, false);
    } else handleChange("dateFrom", dataForm.dateFrom.value, true);
  }, [dataForm.dateTo.value]);

  useEffect(() => {
    if (id && orders.length) {
      const stateOrder = { ...dataForm };
      const order = orders.filter((item) => item.id === id)[0];
      Object.keys(order).forEach((key) => {
        stateOrder[key] = {
          value: order[key] ?? dataFormOrder[key].value,
          inputValid: order[key] === false ? true : !!order[key],
        };
      });
      setDataForm(stateOrder);
    }
  }, [id]);

  const handleSelect = (event, array) => {
    const { value, name } = event.currentTarget;
    const element = array.find((item) => {
      return item.id === value;
    });
    handleChange(name, element ?? dataFormOrder[name], value);
  };

  const handleReset = () => {
    setDataForm(dataFormOrder);
  };

  return (
    <AppLayout
      kind
      entityId={orderId}
      id={id}
      entity="Заказ"
      title="Карточка заказа"
      page={page}
    >
      <RefactorEntitiesLayout
        load={!models.length || !points.length || !tariffs.length}
        dataForm={dataForm}
        handleRequest={handleRequest}
        handleReset={handleReset}
        link="orderList"
        id={id}
      >
        <section className="order-card">
          <ViewOrderCard
            models={models}
            points={points}
            dataForm={dataForm}
            handleSelect={handleSelect}
            handleDataForm={handleChange}
          />
          <ViewOrderSetting
            handleDataForm={handleChange}
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
