import React from "react";
import "./cardCar.scss";
import OrderLayout from "../../layouts/OrderLayout/OrderLayout";

const CardCar = ({ page }) => {
  return (
    <OrderLayout title="Карточка автомобиля" page={page}>
      <main>CardCar</main>
    </OrderLayout>
  );
};

export default CardCar;
