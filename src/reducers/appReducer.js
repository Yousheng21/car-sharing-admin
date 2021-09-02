const SET_ORDERS = "SET_ORDERS";
const SET_ORDERS_NEW = "SET_ORDERS_NEW";
const SET_MODELS = "SET_MODELS";
const SET_CITIES = "SET_CITIES";

const defaultState = {
  orders: [],
  newOrders: [],
  models: [],
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
    case SET_CITIES:
      return {
        ...state,
        cities: action.cities,
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

export const setCities = (cities) => ({
  type: SET_CITIES,
  cities,
});
