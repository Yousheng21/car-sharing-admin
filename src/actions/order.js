import { instance } from "../reducers/data/api/server";
import { setNewOrders, setOrders } from "../reducers/appReducer";
import { store } from "../reducers";
import { getUrl } from "./app";

const LIMIT = 55;

const getOrders = (parameters) => {
  const { accessToken } = store.getState().user.user;
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "GET",
        url: `/api/db/order?${parameters ? getUrl(parameters) : ""}`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          limit: LIMIT,
        },
      });
      dispatch(
        parameters
          ? setNewOrders(response.data.data)
          : setOrders(response.data.data)
      );
    } catch (e) {
      console.error(e.response);
    }
  };
};

export default getOrders;
