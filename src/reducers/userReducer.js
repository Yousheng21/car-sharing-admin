const SET_USER = "SET_USER";
const LOGOUT_USER = "LOGOUT_USER";
const SET_ERROR_FORM = "SET_ERROR_FORM";

const defaultState = {
  user: {
    userId: "",
    accessToken: "",
  },
  isAuth: false,
  isErrorAuth: {
    value: false,
    text: "Неверное имя или пароль",
  },
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuth: true,
        user: {
          userId: action.user.user_id,
          accessToken: action.user.access_token,
        },
        isErrorAuth: {
          ...state.isErrorAuth,
          value: false,
        },
      };
    case SET_ERROR_FORM:
      return {
        ...state,
        isErrorAuth: {
          ...state.isErrorAuth,
          value: true,
        },
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuth: false,
        user: {
          ...defaultState.user,
        },
      };
    default:
      return state;
  }
}

export const setUser = (user) => ({
  type: SET_USER,
  user,
});

export const setErrorForm = () => ({
  type: SET_ERROR_FORM,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
