import { instance } from "../reducers/data/api/server";
import { setNewOrders, setOrders } from "../reducers/appReducer";
import { store } from "../reducers";

const LIMIT = 10;

const getOrders = (parameters) => {
  const { accessToken } = store.getState().user.user;
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "GET",
        url: `/api/db/order?${
          parameters
            ? `${parameters.carId ? `carId=${parameters.carId}&` : ""}${
                parameters.cityId ? `cityId=${parameters.cityId}&` : ""
              }${
                parameters.orderStatusId
                  ? `orderStatusId=${parameters.orderStatusId}`
                  : ""
              }`
            : ""
        }`,
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
