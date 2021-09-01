import React from "react";
import "./navBar.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Logo from "../../../images/Logo Icon small.svg";
import { tabs } from "../../../reducers/data/dataMenu";

const NavBar = ({ page }) => {
  return (
    <div className="navBar">
      <div className="navBar-header">
        <Logo />
        <h1>Need for drive</h1>
      </div>
      <section>
        {tabs.map((item, index) => (
          <Link
            key={item.text}
            className={classNames({
              "navBar-tab": true,
              active: index === page,
            })}
            to={`/car-sharing-admin${item.path}`}
          >
            {item.icon}
            {item.text}
          </Link>
        ))}
      </section>
    </div>
  );
};

export default NavBar;
