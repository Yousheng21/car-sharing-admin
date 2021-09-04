import React from "react";
import "./cardCar.scss";
import AppLayout from "../layouts/AppLayout/AppLayout";

const CardCar = ({ page }) => {
  return (
    <AppLayout title="Карточка автомобиля" page={page}>
      <main>CardCar</main>
    </AppLayout>
  );
};

export default CardCar;
