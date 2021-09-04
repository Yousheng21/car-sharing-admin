import React from "react";
import "./carList.scss";
import AppLayout from "../layouts/AppLayout/AppLayout";

const CarList = ({ page }) => {
  return (
    <AppLayout title="Список авто" page={page}>
      <main>CarList</main>
    </AppLayout>
  );
};

export default CarList;
