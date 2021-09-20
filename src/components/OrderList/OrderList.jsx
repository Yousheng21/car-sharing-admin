import React, { useEffect, useState } from "react";
import "./orderList.scss";
import { useDispatch } from "react-redux";
import AppLayout from "../layouts/AppLayout/AppLayout";
import getOrders from "../../actions/order";
import Order from "./Order/Order";
import getCities from "../../actions/city";
import getCarModels from "../../actions/car";
import { getDropdownOrder } from "../../actions/app";
import EntitiesLayout from "../layouts/EntitiesLayout/EntitiesLayout";
import ListSelector from "../../utils/listSelectors";

const orderPerPage = 5;

const OrderList = ({ page }) => {
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState([]);

  const { orders, newOrders, cities, models } = ListSelector();

  const [currentOrders, setCurrentOrders] = useState(
    orders.slice(0, orderPerPage)
  );

  useEffect(() => {
    if (!orders.length) {
      dispatch(getOrders());
      setCurrentOrders(orders.slice(0, orderPerPage));
    }
  }, [orders.length]);

  useEffect(() => {
    if (!cities.length) dispatch(getCities());
    if (!models.length) dispatch(getCarModels());
    else if (cities.length && models.length)
      setDropdown(getDropdownOrder(models, cities));
  }, [cities.length, models.length]);

  const handleClick = (filters) => {
    dispatch(getOrders(filters));
  };

  const handleReset = () => {
    dispatch(getOrders());
  };

  return (
    <AppLayout title="Заказы" page={page}>
      <EntitiesLayout
        className="order-list"
        dropdown={dropdown}
        entities={newOrders}
        storeEntities={orders}
        setEntities={setCurrentOrders}
        handleClick={handleClick}
        stateFilters="filtersOrder"
        perPage={orderPerPage}
        reset={handleReset}
        titleLoader="Загрузка заказов..."
      >
        <Order orders={currentOrders} />
      </EntitiesLayout>
    </AppLayout>
  );
};

export default OrderList;
