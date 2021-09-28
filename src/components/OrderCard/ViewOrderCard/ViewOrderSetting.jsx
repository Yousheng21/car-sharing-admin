import React from "react";
import { arrOrderStatus, additional } from "../../../reducers/data/dataOrder";
import ViewOrderSettingDate from "./Inputs/ViewOrderSettingDate";
import OrderCardInput from "./Inputs/OrderCardInput";
import Input from "../../common/Input/Input";

const ViewOrderSetting = ({ dataForm, tariffs, handleSelect }) => {
  return (
    <section className="setting-list">
      <h1>Настройки заказа</h1>
      <section className="setting">
        <ViewOrderSettingDate dataForm={dataForm} />
        <OrderCardInput
          dataForm={dataForm}
          array={tariffs}
          handleChange={handleSelect}
          typeInput="select"
          property="rateTypeId"
          isId
          id="rateId"
          text="Тариф"
        />
        <section className="extra-additional">
          {additional.map((item) => (
            <label key={item.name} htmlFor={item.name}>
              {item.name}
              <input
                type="checkbox"
                onChange={() =>
                  dataForm[item.key].setChange(!dataForm[item.key].value)
                }
                name="additional"
                id={item.name}
                checked={!!dataForm[item.key].value}
                value={dataForm[item.key].value}
              />
              <span className="check-mark" />
            </label>
          ))}
        </section>
        <Input
          title="Цена"
          id="name"
          type="number"
          arrValid={["isEmpty", "rangeError"]}
          objInput={dataForm.price}
          necessarily
        />
        <OrderCardInput
          dataForm={dataForm}
          handleChange={handleSelect}
          array={arrOrderStatus}
          typeInput="select"
          isId
          id="orderStatusId"
          text="Статус"
        />
      </section>
    </section>
  );
};

export default ViewOrderSetting;
