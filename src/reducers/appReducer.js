const SET_ORDERS = "SET_ORDERS";
const SET_ORDERS_NEW = "SET_ORDERS_NEW";
const SET_MODELS = "SET_MODELS";
const SET_NEW_MODELS = "SET_NEW_MODELS";
const SET_POINTS = "SET_POINTS";
const SET_NEW_POINTS = "SET_NEW_POINTS";
const SET_CATEGORIES = "SET_CATEGORIES";
const SET_CITIES = "SET_CITIES";
const SET_IS_UPDATED = "SET_IS_UPDATED";
const SET_FILTERS = "SET_FILTERS";
const SET_DATA_FORM_CAR = "SET_DATA_FORM_CAR";

const defaultState = {
  orders: [],
  newOrders: [],
  models: [],
  newModels: [],
  points: [],
  newPoints: [],
  categories: [],
  cities: [],
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
  dataFormCar: {
    priceMax: 0,
    priceMin: 0,
    name: "",
    thumbnail: {
      name: "Выберите файл...",
      path: "",
    },
    description: "",
    tank: 0,
    categoryId: {
      name: "",
      id: "",
    },
    colors: [],
  },
};

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
        newOrders: action.orders,
      };
    case SET_ORDERS_NEW:
      return {
        ...state,
        newOrders: action.orders,
      };
    case SET_MODELS:
      return {
        ...state,
        models: action.models,
        newModels: action.models,
      };
    case SET_NEW_MODELS:
      return {
        ...state,
        newModels: action.models,
      };
    case SET_POINTS:
      return {
        ...state,
        points: action.points,
        newPoints: action.points,
      };
    case SET_NEW_POINTS:
      return {
        ...state,
        newPoints: action.points,
      };
    case SET_CITIES:
      return {
        ...state,
        cities: action.cities,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
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
    case SET_DATA_FORM_CAR:
      return {
        ...state,
        dataFormCar: action.dataForm,
      };
    default:
      return state;
  }
}

export const setOrders = (orders) => ({
  type: SET_ORDERS,
  orders,
});

export const setNewOrders = (orders) => ({
  type: SET_ORDERS_NEW,
  orders,
});

export const setModels = (models) => ({
  type: SET_MODELS,
  models,
});

export const setNewModels = (models) => ({
  type: SET_NEW_MODELS,
  models,
});

export const setPoints = (points) => ({
  type: SET_POINTS,
  points,
});

export const setNewPoints = (points) => ({
  type: SET_NEW_POINTS,
  points,
});

export const setCities = (cities) => ({
  type: SET_CITIES,
  cities,
});

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  categories,
});

export const setIsUpdated = (flag) => ({
  type: SET_IS_UPDATED,
  flag,
});

export const setFilters = (state, dataForm) => ({
  type: SET_FILTERS,
  state,
  dataForm,
});

export const setDataFormCar = (dataForm) => ({
  type: SET_DATA_FORM_CAR,
  dataForm,
});
