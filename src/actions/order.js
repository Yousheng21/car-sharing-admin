import { instance } from "../reducers/data/api/server";
import { setIsUpdated, setTooltip } from "../reducers/appReducer";
import { store } from "../reducers";
import { getUrl } from "./app";
import { setNewOrders, setOrders } from "../reducers/orderReducer";

const getOrders = (parameters) => {
  const { accessToken } = store.getState().user.user;
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "GET",
        url: `/api/db/order${parameters ? getUrl(parameters) : ""}`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      await dispatch(
        parameters
          ? setNewOrders(response.data.data)
          : setOrders(response.data.data)
      );
      dispatch(setIsUpdated(false));
    } catch (e) {
      console.error(e.response);
    }
  };
};

export const setOrderTable = (method, req, id) => {
  const { accessToken } = store.getState().user.user;
  return async (dispatch) => {
    try {
      const response = await instance({
        method,
        url: `/api/db/order/${id || ""}`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: req,
      });
      dispatch(setIsUpdated(true));
      dispatch(getOrders());
      dispatch(setTooltip("success", method, response.data.data.id ?? id));
    } catch (e) {
      dispatch(setTooltip("error", ""));
      console.error(e.response);
    }
  };
};

export default getOrders;
