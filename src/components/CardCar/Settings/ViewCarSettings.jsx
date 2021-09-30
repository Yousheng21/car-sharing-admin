import React, { useEffect } from "react";
import "./viewCarSettings.scss";
import Colors from "./Colors/Colors";
import Input from "../../common/Input/Input";
import InputSelect from "../../common/Input/InputSelect";
import ViewColors from "./Colors/ViewColors";
import Random from "../../../images/Random Icon.svg";

const ViewCarSettings = ({ dataForm, categories }) => {
  const handleCategory = (event, array) => {
    const { value } = event.currentTarget;
    const nameCategory = array.filter((item) => {
      return item.id === value;
    });
    const resultValue = {
      id: value,
      name: nameCategory[0] ? nameCategory[0].name : "",
    };
    dataForm.categoryId.setChange(resultValue);
  };

  const getRandomNumber = () => {
    let result = "";
    const digits = "0123456789";
    const words = "АВЕКМНОРСТУХ";
    const numberStages = [1, 2, 3];
    for (let i = 0; i < 6; i += 1) {
      let array = words;
      if (numberStages.includes(i)) {
        array = digits;
      }
      const position = Math.floor(Math.random() * array.length);
      result += array[position];
    }
    dataForm.number.setChange(result);
  };

  useEffect(() => {
    if (!dataForm.number.value) getRandomNumber();
  }, []);

  return (
    <section className="settings">
      <h1>Настройки автомобиля</h1>
      <section className="settings-main">
        <Input
          title="Модель автомобиля"
          id="name"
          arrValid={["isEmpty", "isModelName"]}
          objInput={dataForm.name}
          className="div-model"
          type="text"
          necessarily
        />
        <InputSelect
          dataForm={dataForm}
          typeInput="select"
          isId
          id="categoryId"
          text="Тип автомобиля"
          placeholder="Выберите категорию"
          handleChange={handleCategory}
          array={categories}
        />
        <Colors colors={dataForm.colors} />
        <ViewColors colors={dataForm.colors} />
        <div className="div-price">
          <Input
            title="Цена от"
            id="priceMin"
            number
            arrValid={["minError", "maxError"]}
            objInput={dataForm.priceMin}
            type="text"
            className="div-price-min"
            necessarily
          />
          <Input
            title="Цена до"
            id="priceMax"
            number
            arrValid={["isEmpty", "minError"]}
            objInput={dataForm.priceMax}
            type="text"
            className="div-price-max"
            necessarily
          />
        </div>
        <div className="div-number">
          <h6>Гос номер</h6>
          <div>
            <input type="text" value={dataForm.number.value} readOnly />
            <button type="button" onClick={getRandomNumber}>
              <Random />
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ViewCarSettings;
