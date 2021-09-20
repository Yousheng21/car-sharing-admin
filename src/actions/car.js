import { instance } from "../reducers/data/api/server";
import { getUrl } from "./app";
import { setCategories, setModels, setNewModels } from "../reducers/carReducer";
import { setIsUpdated } from "../reducers/appReducer";

const getCarModels = (parameters) => {
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "GET",
        url: `/api/db/car${parameters ? getUrl(parameters) : ""}`,
      });
      await dispatch(
        parameters
          ? setNewModels(response.data.data)
          : setModels(response.data.data)
      );
      dispatch(setIsUpdated(false));
    } catch (e) {
      return e.response;
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
      return e.response;
    }
  };
};

export default getCarModels;
