import React from "react";
import Image from "../../common/Image/Image";
import OrderCardInput from "./Inputs/OrderCardInput";

const ViewOrderCard = ({
  dataForm,
  points,
  handleSelect,
  handleDataForm,
  models,
}) => {
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
      <OrderCardInput
        dataForm={dataForm}
        typeInput="select"
        isId
        id="carId"
        text="Модель"
        handleChange={handleSelect}
        array={models}
      />
      <OrderCardInput
        dataForm={dataForm}
        typeInput="select"
        isId
        id="pointId"
        text="Пункт"
        view={viewPoint}
        handleChange={handleSelect}
        array={points}
      />
      {dataForm.carId.value.id && dataForm.carId.value.colors.length ? (
        <OrderCardInput
          dataForm={dataForm}
          typeInput="select"
          id="color"
          text="Цвет машины"
          handleChange={handleDataForm}
          array={dataForm.carId.value.colors}
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default ViewOrderCard;
