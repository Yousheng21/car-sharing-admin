import { instance } from "../reducers/data/api/server";
import { setModels } from "../reducers/appReducer";

const getCarModels = () => {
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "GET",
        url: `/api/db/car`,
        params: {
          limit: 10,
        },
      });
      dispatch(setModels(response.data.data));
    } catch (e) {
      console.error(e.response);
    }
  };
};

export default getCarModels;
