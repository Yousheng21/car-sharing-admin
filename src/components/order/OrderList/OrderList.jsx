import React, { useEffect, useState } from "react";
import "./orderList.scss";
import { useDispatch, useSelector } from "react-redux";
import OrderLayout from "../../layouts/OrderLayout/OrderLayout";
import getOrders from "../../../actions/order";
import Filters from "./Filters";
import Pagination from "../../common/Pagination/Pagination";
import Order from "./Order/Order";

const OrderList = ({ page }) => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [orderPerPage] = useState(5);

  const orders = useSelector((state) => state.app.orders);
  const newOrders = useSelector((state) => state.app.newOrders);

  useEffect(() => {
    if (!orders.length) dispatch(getOrders());
  }, [orders.length]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const next = (pageNumber) => {
    if (currentPage < newOrders.length / orderPerPage)
      setCurrentPage(pageNumber + 1);
    else setCurrentPage(1);
  };

  const prev = (pageNumber) => {
    if (currentPage > 1) setCurrentPage(pageNumber - 1);
    else setCurrentPage(Math.ceil(newOrders.length / orderPerPage));
  };

  const indexOfLastOrder = currentPage * orderPerPage;
  const indexOfFirstOrder = indexOfLastOrder - orderPerPage;
  const currentOrders = newOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  return (
    <OrderLayout title="Заказы" page={page}>
      <main className="order-list">
        <Filters paginate={paginate} />
        <Order storeOrders={orders} orders={currentOrders} />
        <Pagination
          page={currentPage}
          orders={newOrders}
          perPage={orderPerPage}
          next={next}
          prev={prev}
          paginate={paginate}
        />
      </main>
    </OrderLayout>
  );
};

export default OrderList;
