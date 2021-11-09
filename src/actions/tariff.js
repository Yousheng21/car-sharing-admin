import { instance } from "../reducers/data/api/server";
import { setTariffs } from "../reducers/orderReducer";

const getTariffs = () => {
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "GET",
        url: "/api/db/rate",
      });
      dispatch(setTariffs(response.data.data));
    } catch (e) {
      console.error(e.response);
    }
  };
};

export default getTariffs;
