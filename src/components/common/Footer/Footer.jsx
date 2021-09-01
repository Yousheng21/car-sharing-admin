import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <section className="footer-main">
        <a href="/car-sharing-admin">Главная страница</a>
        <a href="/car-sharing-admin">Ссылка</a>
      </section>
      <span>Copyright © 2020 Simbirsoft</span>
    </div>
  );
};

export default Footer;
