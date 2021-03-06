import { instance } from "../reducers/data/api/server";
import { setCities } from "../reducers/pointReducer";

const getCities = () => {
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "GET",
        url: `/api/db/city`,
      });
      dispatch(setCities(response.data.data));
    } catch (e) {
      console.error(e.response);
    }
  };
};

export default getCities;
