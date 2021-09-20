import { instance } from "../reducers/data/api/server";
import { setIsUpdated } from "../reducers/appReducer";
import { setNewOrders, setOrders } from "../reducers/orderReducer";
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
      });
      await dispatch(
        parameters
          ? setNewOrders(response.data.data)
          : setOrders(response.data.data)
      );
      dispatch(setIsUpdated(false));
    } catch (e) {
      return e.response;
    }
  };
};

export default getOrders;
