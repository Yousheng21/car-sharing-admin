import React from "react";
import Image from "../../common/Image/Image";
import InputSelect from "../../common/Input/InputSelect";

const ViewOrderCard = ({ dataForm, points, handleSelect, models }) => {
  const viewPoint = (item) => {
    return `${!!item.cityId && item.cityId.name}, ${item.address}`;
  };
  return (
    <section className="card">
      <div className="image">
        {!!dataForm.carId.value.thumbnail && (
          <Image thumbnail={dataForm.carId.value.thumbnail} />
        )}
      </div>
      <InputSelect
        dataForm={dataForm}
        isId
        id="carId"
        text="Модель автомобиля"
        placeholder="Выберите модель"
        handleChange={handleSelect}
        array={models}
      />
      <InputSelect
        dataForm={dataForm}
        isId
        id="pointId"
        text="Пункт выдачи"
        placeholder="Выберите адрес"
        view={viewPoint}
        handleChange={handleSelect}
        array={points}
      />
      {dataForm.carId.value.id && !!dataForm.carId.value.colors.length && (
        <InputSelect
          dataForm={dataForm}
          id="color"
          text="Цвет машины"
          placeholder="Выберите цвет"
          array={dataForm.carId.value.colors}
        />
      )}
    </section>
  );
};

export default ViewOrderCard;
