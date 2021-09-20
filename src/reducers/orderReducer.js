const SET_ORDERS = "SET_ORDERS";
const SET_ORDERS_NEW = "SET_ORDERS_NEW";

const defaultState = {
  orders: [],
  newOrders: [],
};

export default function orderReducer(state = defaultState, action) {
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
