import React from "react";
import { arrOrderStatus, additional } from "../../../reducers/data/dataOrder";
import ViewOrderSettingDate from "./Inputs/ViewOrderSettingDate";
import InputSelect from "../../common/Input/InputSelect";
import Input from "../../common/Input/Input";

const ViewOrderSetting = ({ dataForm, tariffs, handleSelect }) => {
  return (
    <section className="setting-list">
      <h1>Настройки заказа</h1>
      <section className="setting">
        <ViewOrderSettingDate dataForm={dataForm} />
        <InputSelect
          dataForm={dataForm}
          array={tariffs}
          handleChange={handleSelect}
          property="rateTypeId"
          isId
          id="rateId"
          text="Тариф аренды"
          placeholder="Выберите тариф"
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
          number
          arrValid={["isEmpty", "rangeError"]}
          objInput={dataForm.price}
          type="text"
          necessarily
        />
        <InputSelect
          dataForm={dataForm}
          handleChange={handleSelect}
          array={arrOrderStatus}
          isId
          id="orderStatusId"
          text="Статус заказа"
          placeholder="Выберите статус"
        />
      </section>
    </section>
  );
};

export default ViewOrderSetting;
