import { instanceAuth } from "../reducers/data/dataServer";
import { setErrorForm, setUser } from "../reducers/userReducer";

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await instanceAuth({
        url: "/api/auth/login",
        data: {
          username,
          password,
        },
      });
      dispatch(setUser(response.data.user_id));
      localStorage.setItem("token", response.data.refresh_token);
    } catch (e) {
      dispatch(setErrorForm());
      console.error(e.response);
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await instanceAuth({
        url: " /api/auth/refresh",
        data: {
          refresh_token: localStorage.getItem("token"),
        },
      });
      dispatch(setUser(response.data.user_id));
    } catch (e) {
      dispatch(setErrorForm());
      console.error(e.response);
    }
  };
};

export default login();
