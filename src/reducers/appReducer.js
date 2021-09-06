const SET_ORDERS = "SET_ORDERS";
const SET_ORDERS_NEW = "SET_ORDERS_NEW";
const SET_MODELS = "SET_MODELS";
const SET_NEW_MODELS = "SET_NEW_MODELS";
const SET_CATEGORIES = "SET_CATEGORIES";
const SET_CITIES = "SET_CITIES";

const defaultState = {
  orders: [],
  newOrders: [],
  models: [],
  newModels: [],
  categories: [],
  cities: [],
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
      };
    case SET_NEW_MODELS:
      return {
        ...state,
        newModels: action.models,
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

export const setCities = (cities) => ({
  type: SET_CITIES,
  cities,
});

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  categories,
});
