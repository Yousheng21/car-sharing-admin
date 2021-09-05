import { instance } from "../reducers/data/api/server";
import { setNewOrders, setOrders } from "../reducers/appReducer";
import { store } from "../reducers";

const getUrl = (params) => {
  let requestUrl = "?";
  Object.keys(params).map((param) => {
    if (params[param]) requestUrl += `${param}=${params[param]}&`;
    return requestUrl;
  });
  return requestUrl.substring(0, requestUrl.length - 1);
};

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
