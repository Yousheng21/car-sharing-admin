const SET_IS_UPDATED = "SET_IS_UPDATED";
const SET_FILTERS = "SET_FILTERS";

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
