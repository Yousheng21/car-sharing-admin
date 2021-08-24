const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const defaultState = {
  currentPage: 0,
};

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    default:
      return state;
  }
}

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  page,
});
