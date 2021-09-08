import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Authorization from "./Authorization/Authorization";
import OrderList from "./OrderList/OrderList";
import CardCar from "./CardCar/CardCar";
import CarList from "./CarList/CarList";
import { auth } from "../actions/login";
import PointList from "./PointList/PointList";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const [token, setToken] = useState("");

  useEffect(() => {
    if (token) dispatch(auth());
    else setToken(localStorage.getItem("token"));
  }, [token]);

  return (
    <BrowserRouter>
      {!isAuth ? (
        <Redirect to="/car-sharing-admin/admin" />
      ) : (
        <Redirect to="/car-sharing-admin" />
      )}
      <Switch>
        <Route
          exact
          path="/car-sharing-admin"
          render={() => <CardCar page={0} />}
        />
        <Route path="/car-sharing-admin/admin" component={Authorization} />
        <Route
          path="/car-sharing-admin/cardList"
          render={() => <CarList page={1} />}
        />
        <Route
          path="/car-sharing-admin/orderList"
          render={() => <OrderList page={2} />}
        />
        <Route
          path="/car-sharing-admin/pointList"
          render={() => <PointList page={3} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
