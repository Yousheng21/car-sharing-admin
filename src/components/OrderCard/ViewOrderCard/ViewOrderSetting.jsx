import React from "react";
import { arrOrderStatus } from "../../../reducers/data/dataOrder";
import ViewOrderSettingDate from "./Inputs/ViewOrderSettingDate";
import OrderCardInput from "./Inputs/OrderCardInput";

const ViewOrderSetting = ({
  dataForm,
  tariffs,
  handleDataForm,
  handleSelect,
}) => {
  return (
    <section className="setting">
      <h1>Настройки заказа</h1>
      <section>
        <ViewOrderSettingDate
          handleDataForm={handleDataForm}
          dataForm={dataForm}
        />
        <OrderCardInput
          dataForm={dataForm}
          array={tariffs}
          handleChange={handleSelect}
          type="select"
          id
          name="rateId"
          text="Тариф"
        />
        <OrderCardInput
          dataForm={dataForm}
          handleChange={handleSelect}
          array={arrOrderStatus}
          type="select"
          id
          name="orderStatusId"
          text="Статус"
        />
      </section>
    </section>
  );
};

export default ViewOrderSetting;
