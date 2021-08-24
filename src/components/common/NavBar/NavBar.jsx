import React from "react";
import "./navBar.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../../images/Logo Icon.svg";
import { tabs } from "../../../reducers/data/dataMenu";
import { setCurrentPage } from "../../../reducers/appReducer";

const NavBar = () => {
  const dispatch = useDispatch();
  const currPage = useSelector((state) => state.app.currentPage);
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
              active: index === currPage,
            })}
            onClick={() => dispatch(setCurrentPage(index))}
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
