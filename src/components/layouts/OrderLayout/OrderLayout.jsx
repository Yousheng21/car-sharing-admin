import React from "react";
import "./orderLayout.scss";
import NavBar from "../../common/NavBar/NavBar";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";

const OrderLayout = ({ children, title, page }) => {
  return (
    <div className="order-layout">
      <NavBar page={page} />
      <Header />
      <section className="main">
        <h1 className="title">{title}</h1>
        {children}
      </section>
      <Footer />
    </div>
  );
};

export default OrderLayout;
