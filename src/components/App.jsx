import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import Authorization from "./Authorization/Authorization";
import OrderList from "./order/OrderList/OrderList";
import CardCar from "./order/CardCar/CardCar";
import CarList from "./order/CarList/CarList";

const App = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <BrowserRouter>
      {!isAuth ? (
        <Switch>
          <Route exact path="/car-sharing-admin" component={Authorization} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/car-sharing-admin" component={CardCar} />
          <Route path="/car-sharing-admin/cardList" component={CarList} />
          <Route path="/car-sharing-admin/orderList" component={OrderList} />
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default App;
