import React, { useEffect } from "react";
import "./settings.scss";
import InputSetting from "./Inputs/InputSetting";
import Colors from "./Inputs/Colors";

const Settings = ({ dataForm, handleDataForm, categories }) => {
  const handleCategory = (event) => {
    const { value, name } = event.currentTarget;
    const nameCategory = categories.filter((item) => {
      return item.id === value;
    });
    const resultValue = {
      id: value,
      name: nameCategory[0] ? nameCategory[0].name : "",
    };
    handleDataForm(name, resultValue, value);
  };

  useEffect(() => {
    const { priceMin, priceMax } = dataForm;
    if (priceMin.value > 0 && priceMin.value < priceMax.value) {
      priceMin.setInputValid(true);
      priceMin.setMaxError({ value: false, text: "" });
      priceMax.setInputValid(true);
      priceMax.setMinError({ value: false, text: "" });
    }
  }, [dataForm.priceMin.value, dataForm.priceMax.value]);

  return (
    <section className="settings">
      <h1>Настройки автомобиля</h1>
      <section className="settings-main">
        <InputSetting
          title="Модель автомобиля"
          id="name"
          type="text"
          arrValid={["isEmpty", "isModelName"]}
          objInput={dataForm.name}
          className="div-model"
          necessarily
        />
        <div className="div-category">
          <label htmlFor="category">
            <span title="обязательное поле">Тип автомобиля *</span>
            <div className="select">
              <select
                value={
                  dataForm.categoryId.value ? dataForm.categoryId.value.id : ""
                }
                onChange={handleCategory}
                name="categoryId"
                id="categoryId"
              >
                <option value="">Выберите категорию</option>
                {categories.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </label>
        </div>
        <Colors
          handleDataForm={handleDataForm}
          colors={dataForm.colors.value}
        />
        <div className="div-price">
          <InputSetting
            title="Цена от"
            id="priceMin"
            type="number"
            arrValid={["minError", "maxError"]}
            objInput={dataForm.priceMin}
            className="div-price-min"
            necessarily
          />
          <InputSetting
            title="Цена до"
            id="priceMax"
            type="number"
            arrValid={["isEmpty", "minError"]}
            objInput={dataForm.priceMax}
            className="div-price-max"
            necessarily
          />
        </div>
      </section>
    </section>
  );
};

export default Settings;
