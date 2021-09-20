import { instance } from "../reducers/data/api/server";
import {
  setCarModelId,
  setCategories,
  setIsUpdated,
  setModels,
  setNewModels,
  setTooltip,
} from "../reducers/appReducer";
import { getUrl } from "./app";
import { store } from "../reducers";

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

export const requestCarModel = (method, req, id) => {
  const { accessToken } = store.getState().user.user;
  return async (dispatch) => {
    try {
      const response = await instance({
        method,
        url: `/api/db/car/${id || ""}`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: req,
      });
      dispatch(setCarModelId(response.data.data.id ?? id));
      dispatch(setIsUpdated(true));
      dispatch(getCarModels());
      dispatch(setTooltip("success", method));
    } catch (e) {
      dispatch(setTooltip("error", ""));
      console.error(e.response);
    }
  };
};

export const getCarModelObj = (method, obj, id) => {
  let result = { ...obj };
  const handleObjCar = (key) => {
    result = {
      ...result,
      [key]: obj[key].value,
    };
  };
  Object.keys(obj).forEach((item) => {
    return handleObjCar(item);
  });
  store.dispatch(requestCarModel(method, result, id));
};

export default getCarModels;
