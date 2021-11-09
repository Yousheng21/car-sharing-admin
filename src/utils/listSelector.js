import { useSelector } from "react-redux";

const ListSelector = () => {
  const getStateBy = (state) => (reducer) => (name) => state[reducer][name];

  const models = useSelector(getStateBy)("car")("models");
  const categories = useSelector(getStateBy)("car")("categories");
  const newModels = useSelector(getStateBy)("car")("newModels");

  const isUpdated = useSelector(getStateBy)("app")("isUpdated");
  const tooltip = useSelector(getStateBy)("app")("tooltip");

  const user = useSelector(getStateBy)("user")("user");
  const isAuth = useSelector(getStateBy)("user")("isAuth");
  const isErrorAuth = useSelector(getStateBy)("user")("isErrorAuth");

  const orders = useSelector(getStateBy)("order")("orders");
  const newOrders = useSelector(getStateBy)("order")("newOrders");
  const tariffs = useSelector(getStateBy)("order")("tariffs");

  const points = useSelector(getStateBy)("point")("points");
  const newPoints = useSelector(getStateBy)("point")("newPoints");
  const cities = useSelector(getStateBy)("point")("cities");

  return {
    models,
    categories,
    newModels,
    isUpdated,
    tooltip,
    user,
    isAuth,
    isErrorAuth,
    orders,
    newOrders,
    tariffs,
    points,
    newPoints,
    cities,
  };
};

export default ListSelector;
