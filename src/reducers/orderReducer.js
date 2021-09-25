const SET_ORDERS = "SET_ORDERS";
const SET_ORDERS_NEW = "SET_ORDERS_NEW";
const SET_ORDER_STATUS = "SET_ORDER_STATUS";
const SET_ORDER_ID = "SET_ORDER_ID";
const SET_TARIFFS = "SET_TARIFFS";

const defaultState = {
  orders: [],
  newOrders: [],
  orderStatuses: [],
  tariffs: [],
  orderId: "",
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
    case SET_ORDER_STATUS:
      return {
        ...state,
        orderStatuses: action.arrayStatus,
      };
    case SET_ORDER_ID:
      return {
        ...state,
        orderId: action.id,
      };
    case SET_TARIFFS:
      return {
        ...state,
        tariffs: action.tariffs,
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

export const setOrderStatus = (arrayStatus) => ({
  type: SET_ORDER_STATUS,
  arrayStatus,
});

export const setOrderId = (id) => ({
  type: SET_ORDER_ID,
  id,
});

export const setTariffs = (tariffs) => ({
  type: SET_TARIFFS,
  tariffs,
});
