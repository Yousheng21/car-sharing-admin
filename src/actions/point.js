import { instance } from "../reducers/data/api/server";
import { getUrl } from "./app";
import { setIsUpdated, setTooltip } from "../reducers/appReducer";
import { setNewPoints, setPoints } from "../reducers/pointReducer";
import { store } from "../reducers";

const getPoints = (parameters) => {
  return async (dispatch) => {
    try {
      const response = await instance({
        method: "GET",
        url: `/api/db/point${parameters ? getUrl(parameters) : ""}`,
      });
      await dispatch(
        parameters
          ? setNewPoints(response.data.data)
          : setPoints(response.data.data)
      );
      dispatch(setIsUpdated(false));
    } catch (e) {
      console.error(e.response);
    }
  };
};

export const requestPoint = (method, req, id) => {
  const { accessToken } = store.getState().user.user;
  return async (dispatch) => {
    try {
      const response = await instance({
        method,
        url: `/api/db/point/${id || ""}`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: req,
      });
      dispatch(setIsUpdated(true));
      dispatch(getPoints());
      dispatch(setTooltip("success", method, response.data.data.id ?? id));
    } catch (e) {
      dispatch(setTooltip("error", ""));
      console.error(e.response);
    }
  };
};

export default getPoints;
