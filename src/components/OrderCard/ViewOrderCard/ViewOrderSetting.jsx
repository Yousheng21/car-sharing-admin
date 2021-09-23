import React, { useEffect, useMemo, useState } from "react";
import { arrOrderStatus, additional } from "../../../reducers/data/dataOrder";
import ViewOrderSettingDate from "./Inputs/ViewOrderSettingDate";
import OrderCardInput from "./Inputs/OrderCardInput";

const ViewOrderSetting = ({
  dataForm,
  tariffs,
  handleDataForm,
  handleSelect,
}) => {
  const [priceBlur, setPriceBlur] = useState(false);

  const viewErrorPrice = useMemo(() => {
    if (dataForm.carId.value.id)
      return `Выберите цену от ${dataForm.carId.value.priceMin} до ${dataForm.carId.value.priceMax}`;
    return `Введите натуральное число`;
  }, [dataForm.carId.value]);

  useEffect(() => {
    const price = dataForm.price.value;
    const car = dataForm.carId.value;
    let flag = false;
    if (car.id) {
      if (price >= car.priceMin && price <= car.priceMax) flag = true;
    } else if (price > 0) flag = true;
    handleDataForm("price", price, flag);
  }, [dataForm.price.value, dataForm.carId.value.id]);

  return (
    <section className="setting-list">
      <h1>Настройки заказа</h1>
      <section className="setting">
        <ViewOrderSettingDate
          handleDataForm={handleDataForm}
          dataForm={dataForm}
        />
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
                  handleDataForm(item.key, !dataForm[item.key].value, true)
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
        <OrderCardInput
          dataForm={dataForm}
          handleChange={handleDataForm}
          typeInput="number"
          onBlur={setPriceBlur}
          blur={priceBlur}
          id="price"
          text="Цена"
          viewError={viewErrorPrice}
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
