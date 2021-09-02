import React from "react";
import "./carList.scss";
import OrderLayout from "../../layouts/OrderLayout/OrderLayout";

const CarList = ({ page }) => {
  return (
    <OrderLayout title="Список авто" page={page}>
      <main>CarList</main>
    </OrderLayout>
  );
};

export default CarList;
