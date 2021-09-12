import React, { useEffect } from "react";
import "./settings.scss";
import InputSetting from "./Inputs/InputSetting";
import Colors from "./Inputs/Colors";

const Settings = ({
  currColor,
  colors,
  setColors,
  priceMin,
  priceMax,
  category,
  setCategory,
  categories,
  modelName,
}) => {
  const handleCategory = (event) => {
    const { value } = event.currentTarget;
    const name = categories.filter((item) => {
      return item.id === value;
    });
    setCategory({ id: value, name: name[0] ? name[0].name : "" });
  };

  useEffect(() => {
    if (
      Number(priceMin.value) > 0 &&
      Number(priceMin.value) < Number(priceMax.value)
    ) {
      priceMin.setInputValid(true);
      priceMin.setMaxError({ value: false, text: "" });
      priceMax.setInputValid(true);
      priceMax.setMinError({ value: false, text: "" });
    }
  }, [priceMin.value, priceMax.value]);

  return (
    <section className="settings">
      <h1>Настройки автомобиля</h1>
      <section className="settings-main">
        <InputSetting
          title="Модель автомобиля"
          id="name"
          type="text"
          arrValid={["isEmpty", "isModelName"]}
          objInput={modelName}
          className="div-model"
          necessarily
        />
        <div className="div-category">
          <label htmlFor="category">
            <span title="обязательное поле">Тип автомобиля *</span>
            <div className="select">
              <select
                value={category.id}
                onChange={handleCategory}
                name="categoryId"
                id="category"
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
        <Colors colors={colors} currColor={currColor} setColors={setColors} />
        <div className="div-price">
          <InputSetting
            title="Цена от"
            id="priceMin"
            type="number"
            arrValid={["minError", "maxError"]}
            objInput={priceMin}
            className="div-price-min"
            necessarily
          />
          <InputSetting
            title="Цена до"
            id="priceMax"
            type="number"
            arrValid={["isEmpty", "minError"]}
            objInput={priceMax}
            className="div-price-max"
            necessarily
          />
        </div>
      </section>
    </section>
  );
};

export default Settings;
