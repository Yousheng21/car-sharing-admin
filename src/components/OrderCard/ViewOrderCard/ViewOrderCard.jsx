import React from "react";
import Image from "../../common/Image/Image";
import OrderCardInput from "./Inputs/OrderCardInput";

const ViewOrderCard = ({ dataForm, points, handleSelect, models }) => {
  return (
    <section className="card">
      {dataForm.carId.thumbnail ? (
        <div>
          <Image thumbnail={dataForm.carId.thumbnail} />
        </div>
      ) : (
        ""
      )}
      <OrderCardInput
        dataForm={dataForm}
        type="select"
        id
        name="carId"
        text="Модель"
        handleChange={handleSelect}
        array={models}
      />
      <OrderCardInput
        dataForm={dataForm}
        type="select"
        id
        name="pointId"
        text="Пункт"
        handleChange={handleSelect}
        array={points}
      />
      {dataForm.carId && dataForm.carId.colors.length ? (
        <OrderCardInput
          dataForm={dataForm}
          type="select"
          name="color"
          text="Цвет машины"
          handleChange={handleSelect}
          array={points}
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default ViewOrderCard;
