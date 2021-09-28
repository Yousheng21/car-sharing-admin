import React from "react";
import "./settings.scss";
import Colors from "./Inputs/Colors";
import Input from "../../common/Input/Input";

const Settings = ({ dataForm, categories }) => {
  const handleCategory = (event) => {
    const { value } = event.currentTarget;
    const nameCategory = categories.filter((item) => {
      return item.id === value;
    });
    const resultValue = {
      id: value,
      name: nameCategory[0] ? nameCategory[0].name : "",
    };
    dataForm.categoryId.setChange(resultValue);
  };

  return (
    <section className="settings">
      <h1>Настройки автомобиля</h1>
      <section className="settings-main">
        <Input
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
        <Colors colors={dataForm.colors} />
        <div className="div-price">
          <Input
            title="Цена от"
            id="priceMin"
            type="number"
            arrValid={["minError", "maxError"]}
            objInput={dataForm.priceMin}
            className="div-price-min"
            necessarily
          />
          <Input
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
