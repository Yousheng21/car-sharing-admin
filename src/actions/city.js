import { instance } from "../reducers/data/api/server";
import { setCities } from "../reducers/pointReducer";

const getCities = () => {
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "GET",
        url: `/api/db/city`,
        params: {
          limit: 5,
        },
      });
      dispatch(setCities(response.data.data));
    } catch (e) {
      return e.response;
    }
  };
};

export default getCities;
