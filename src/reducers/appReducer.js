const SET_IS_UPDATED = "SET_IS_UPDATED";
const SET_FILTERS = "SET_FILTERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOOLTIP = "SET_TOOLTIP";

const defaultState = {
  isUpdated: false,
  filtersPoint: {
    id: "",
    cityId: "",
  },
  filtersOrder: {
    "createdAt[$gt]": "",
    carId: "",
    cityId: "",
    orderStatusId: "",
  },
  filtersCar: {
    id: "",
    categoryId: "",
    "priceMin[$gt]": "",
    "priceMax[$lt]": "",
  },
  currentPage: {
    filtersCar: 1,
    filtersPoint: 1,
    filtersOrder: 1,
  },
  tooltip: {
    type: "",
    method: "",
  },
};

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_IS_UPDATED:
      return {
        ...state,
        isUpdated: action.flag,
      };
    case SET_FILTERS:
      return {
        ...state,
        [action.state]: action.dataForm,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: {
          ...state.currentPage,
          [action.state]: action.page,
        },
      };
    case SET_TOOLTIP:
      return {
        ...state,
        tooltip: {
          type: action.tooltip,
          method: action.method,
        },
      };
    default:
      return state;
  }
}

export const setIsUpdated = (flag) => ({
  type: SET_IS_UPDATED,
  flag,
});

export const setFilters = (state, dataForm) => ({
  type: SET_FILTERS,
  state,
  dataForm,
});

export const setCurrentPage = (state, page) => ({
  type: SET_CURRENT_PAGE,
  state,
  page,
});

export const setTooltip = (tooltip, method) => ({
  type: SET_TOOLTIP,
  tooltip,
  method,
});
