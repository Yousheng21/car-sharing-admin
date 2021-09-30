import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-main">
        <Link to="/car-sharing-admin/cardCar">Главная страница</Link>
        <Link to="/car-sharing-admin/cardCar">Ссылка</Link>
      </section>
      <span>Copyright © 2020 Simbirsoft</span>
    </footer>
  );
};

export default Footer;
