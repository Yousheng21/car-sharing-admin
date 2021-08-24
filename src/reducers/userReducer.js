const SET_USER = "SET_USER";
const SET_ERROR_FORM = "SET_ERROR_FORM";

const defaultState = {
  userId: "",
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
        userId: action.id,
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
    default:
      return state;
  }
}

export const setUser = (id) => ({
  type: SET_USER,
  id,
});

export const setErrorForm = () => ({
  type: SET_ERROR_FORM,
});
