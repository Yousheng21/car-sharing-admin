import { useSelector } from "react-redux";

const ListSelector = () => {
  const getStateBy = (state) => (reducer) => (name) => state[reducer][name];

  const models = useSelector(getStateBy)("car")("models");
  const categories = useSelector(getStateBy)("car")("categories");
  const newModels = useSelector(getStateBy)("car")("newModels");
  const curModelId = useSelector(getStateBy)("car")("curModelId");

  const isUpdated = useSelector(getStateBy)("app")("isUpdated");
  const tooltip = useSelector(getStateBy)("app")("tooltip");

  const user = useSelector(getStateBy)("user")("user");
  const isAuth = useSelector(getStateBy)("user")("isAuth");
  const isErrorAuth = useSelector(getStateBy)("user")("isErrorAuth");

  const orders = useSelector(getStateBy)("order")("orders");
  const newOrders = useSelector(getStateBy)("order")("newOrders");
  const orderStatuses = useSelector(getStateBy)("order")("orderStatuses");
  const tariffs = useSelector(getStateBy)("order")("tariffs");
  const orderId = useSelector(getStateBy)("order")("orderId");

  const points = useSelector(getStateBy)("point")("points");
  const newPoints = useSelector(getStateBy)("point")("newPoints");
  const cities = useSelector(getStateBy)("point")("cities");

  return {
    models,
    categories,
    newModels,
    curModelId,
    isUpdated,
    tooltip,
    user,
    isAuth,
    isErrorAuth,
    orders,
    newOrders,
    orderStatuses,
    tariffs,
    orderId,
    points,
    newPoints,
    cities,
  };
};

export default ListSelector;
