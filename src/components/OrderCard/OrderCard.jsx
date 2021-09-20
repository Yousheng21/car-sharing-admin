import React, { useState } from "react";
import { useSelector } from "react-redux";
import RefactorEntitiesLayout from "../layouts/RefactorEntitiesLayout/RefactorEntitiesLayout";
import AppLayout from "../layouts/AppLayout/AppLayout";
import { setOrderTable } from "../../actions/order";
import "./orderCard.scss";
import ViewOrderCard from "./ViewOrderCard/ViewOrderCard";
import { dataFormOrder } from "../../reducers/data/dataOrder";
import ViewOrderSetting from "./ViewOrderCard/ViewOrderSetting";

const OrderCard = ({ page, match }) => {
  const { id } = match.params;
  const [dataForm, setDataForm] = useState({ ...dataFormOrder });

  const orderId = useSelector((state) => state.app.orderId);
  const models = useSelector((state) => state.app.models);
  const points = useSelector((state) => state.app.points);
  const tariffs = useSelector((state) => state.app.tariffs);

  const handleRequest = (method, OrderId) => {
    return setOrderTable(method, dataForm, OrderId);
  };

  const handleChange = (name, value) => {
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSelect = (event, array) => {
    const { value, name } = event.currentTarget;
    const element = array.map((item) => {
      return item.id === value;
    });
    handleChange(name, element[0] ?? dataFormOrder[name]);
  };

  const handleReset = () => {
    Object.keys(dataForm).forEach((key) => {
      handleChange(key, dataFormOrder[key]);
    });
  };

  return (
    <AppLayout
      kind
      id={orderId}
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
        <section className="order-car">
          <ViewOrderCard
            models={models}
            points={points}
            dataForm={dataForm}
            handleSelect={handleSelect}
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
