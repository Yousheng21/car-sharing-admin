import React, { useEffect } from "react";
import "./settings.scss";
import InputSetting from "./Inputs/InputSetting";
import Colors from "./Inputs/Colors";

const Settings = ({ dataForm, handleDataForm, categories }) => {
  const handleCategory = (event) => {
    const { value, name } = event.currentTarget;
    // const resultValue = {
    //   id: value,
    //   name: nameCategory[0] ? nameCategory[0].name : "",
    // };
    dataForm[name].setChange(value);
  };

  useEffect(() => {
    if (
      Number(dataForm.priceMin.value) > 0 &&
      Number(dataForm.priceMin.value) < Number(dataForm.priceMax.value)
    ) {
      dataForm.priceMin.setInputValid(true);
      dataForm.priceMin.setMaxError({ value: false, text: "" });
      dataForm.priceMax.setInputValid(true);
      dataForm.priceMax.setMinError({ value: false, text: "" });
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
                value={dataForm.categoryId.id}
                onChange={handleCategory}
                name="categoryId"
                id="category"
              >
                <option value="">Выберите категорию</option>
                <option value="1">1</option>
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
