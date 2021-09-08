import { instance } from "../reducers/data/api/server";
import { getUrl } from "./app";
import { setIsUpdated, setNewPoints, setPoints } from "../reducers/appReducer";

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

export default getPoints;