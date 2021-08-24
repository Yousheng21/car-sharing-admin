import React from "react";
import "./orderLayout.scss";
import NavBar from "../../common/NavBar/NavBar";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";

const OrderLayout = ({ children }) => {
  return (
    <div className="order-layout">
      <NavBar />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default OrderLayout;
