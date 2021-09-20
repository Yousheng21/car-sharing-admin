import { instance } from "../reducers/data/api/server";
import {
  setIsUpdated,
  setNewOrders,
  setOrderId,
  setOrders,
  setTooltip,
} from "../reducers/appReducer";
import { store } from "../reducers";
import { getUrl } from "./app";

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
        params: {
          limit: 55,
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
        method: "POST",
        url: `/api/db/order/${id || ""}`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: req,
      });
      dispatch(setOrderId(response.data.data.id ?? id));
      dispatch(setIsUpdated(true));
      dispatch(setTooltip("success", method));
    } catch (e) {
      dispatch(setTooltip("error", ""));
      console.error(e.response);
    }
  };
};

export default getOrders;
