import React, { useEffect, useState } from "react";
import "./orderList.scss";
import { useDispatch, useSelector } from "react-redux";
import OrderLayout from "../../layouts/OrderLayout/OrderLayout";
import getOrders from "../../../actions/order";
import Filters from "./Filters";
import Pagination from "../../common/Pagination/Pagination";
import Order from "./Order";

const OrderList = ({ page }) => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [orderPerPage] = useState(1);

  const orders = useSelector((state) => state.app.orders);
  const newOrders = useSelector((state) => state.app.newOrders);

  useEffect(() => {
    if (!orders.length) dispatch(getOrders());
  }, [orders.length]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastOrder = currentPage * orderPerPage;
  const indexOfFirstOrder = indexOfLastOrder - orderPerPage;
  const currentOrders = newOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  return (
    <OrderLayout title="Заказы" page={page}>
      <main className="order-list">
        <Filters paginate={paginate} />
        <Order orders={currentOrders} />
        <Pagination page={currentPage} orders={newOrders} paginate={paginate} />
      </main>
    </OrderLayout>
  );
};

export default OrderList;
