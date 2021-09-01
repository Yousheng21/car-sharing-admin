import { instanceAuth } from "../reducers/data/dataServer";
import { logoutUser, setErrorForm, setUser } from "../reducers/userReducer";
import { store } from "../reducers";

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
      dispatch(setUser(response.data));
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
        url: "/api/auth/refresh",
        data: {
          refresh_token: localStorage.getItem("token"),
        },
      });
      dispatch(setUser(response.data));
    } catch (e) {
      dispatch(setErrorForm());
      console.error(e.response);
    }
  };
};

export const logout = () => {
  const token = store.getState().user.user.accessToken;
  return async (dispatch) => {
    try {
      await instanceAuth({
        url: "/api/auth/logout",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(logoutUser());
      localStorage.removeItem("token");
    } catch (e) {
      console.error(e.response);
    }
  };
};

export default login();
