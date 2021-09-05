import { instance } from "../reducers/data/api/server";
import { setCategories, setModels, setNewModels } from "../reducers/appReducer";
import { getUrl } from "./app";

const getCarModels = (parameters) => {
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "GET",
        url: `/api/db/car?${parameters ? getUrl(parameters) : ""}`,
        params: {
          limit: 10,
        },
      });
      dispatch(
        parameters
          ? setNewModels(response.data.data)
          : setModels(response.data.data)
      );
    } catch (e) {
      console.error(e.response);
    }
  };
};

export const getCategories = () => {
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "GET",
        url: `/api/db/category`,
      });
      dispatch(setCategories(response.data.data));
    } catch (e) {
      console.error(e.response);
    }
  };
};

export default getCarModels;
