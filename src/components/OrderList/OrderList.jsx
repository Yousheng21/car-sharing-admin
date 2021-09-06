import React, { useEffect, useState } from "react";
import "./orderList.scss";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../layouts/AppLayout/AppLayout";
import getOrders from "../../actions/order";
import Order from "./Order/Order";
import getCities from "../../actions/city";
import getCarModels from "../../actions/car";
import { getDropdownOrder } from "../../actions/app";
import EntitiesLayout from "../layouts/EntitiesLayout/EntitiesLayout";

const OrderList = ({ page }) => {
  const dispatch = useDispatch();

  const [orderPerPage] = useState(5);
  const [dropdown, setDropdown] = useState([]);
  const [dataForm, setDataForm] = useState({
    "createdAt[$gt]": "",
    carId: "",
    cityId: "",
    orderStatusId: "",
  });

  const cities = useSelector((state) => state.app.cities);
  const models = useSelector((state) => state.app.models);

  const orders = useSelector((state) => state.app.orders);
  const newOrders = useSelector((state) => state.app.newOrders);

  const [currentOrders, setCurrentOrders] = useState(
    orders.slice(0, orderPerPage)
  );

  useEffect(() => {
    if (!orders.length) {
      dispatch(getOrders());
    } else setCurrentOrders(orders.slice(0, orderPerPage));
  }, [orders.length]);

  useEffect(() => {
    if (!cities.length && !models.length) {
      dispatch(getCities());
      dispatch(getCarModels());
    } else setDropdown(getDropdownOrder(models, cities));
  }, [cities.length, models.length]);

  const handleClick = (filters) => {
    dispatch(getOrders(filters));
  };
  return (
    <AppLayout title="Заказы" page={page}>
      <EntitiesLayout
        className="order-list"
        dropdown={dropdown}
        dataForm={dataForm}
        entities={newOrders}
        setEntities={setCurrentOrders}
        handleClick={handleClick}
        setDataForm={setDataForm}
        orderPerPage={orderPerPage}
      >
        <Order storeOrders={orders} orders={currentOrders} />
      </EntitiesLayout>
    </AppLayout>
  );
};

export default OrderList;
