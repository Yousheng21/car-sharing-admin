import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Authorization from "./Authorization/Authorization";
import OrderList from "./order/OrderList/OrderList";
import CardCar from "./order/CardCar/CardCar";
import CarList from "./order/CarList/CarList";
import { auth } from "../actions/login";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) dispatch(auth());
  }, [token]);

  return (
    <BrowserRouter>
      {!isAuth ? (
        <Switch>
          <Route path="/car-sharing-admin" component={Authorization} />
        </Switch>
      ) : (
        <Switch>
          <Route
            exact
            path="/car-sharing-admin"
            render={() => <CardCar page={0} />}
          />
          <Route
            path="/car-sharing-admin/cardList"
            render={() => <CarList page={1} />}
          />
          <Route
            path="/car-sharing-admin/orderList"
            render={() => <OrderList page={2} />}
          />
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default App;
