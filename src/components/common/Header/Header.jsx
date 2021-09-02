import React from "react";
import "./header.scss";
import { useDispatch } from "react-redux";
import SearchLogo from "../../../images/Shape.svg";
import Avatar from "../../../images/Avatar.svg";
import Notifications from "../../../images/Notifications.svg";
import { logout } from "../../../actions/login";

const Header = () => {
  const dispatch = useDispatch();
  const handleChangeSelect = (value) => {
    if (value === "logout") dispatch(logout());
  };
  return (
    <header className="header">
      <section className="search">
        <SearchLogo />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Поиск ..."
        />
      </section>
      <section className="note">
        <Notifications />
      </section>
      <section className="admin-panel">
        <Avatar />
        <select
          className="select"
          name="admin"
          onChange={(event) => handleChangeSelect(event.target.value)}
          id="admin"
        >
          <option value="Admin">Admin</option>
          <option value="logout">Logout</option>
        </select>
      </section>
    </header>
  );
};

export default Header;
