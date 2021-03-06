import { applyMiddleware, createStore, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import appReducer from "./appReducer";
import pointReducer from "./pointReducer";
import carReducer from "./carReducer";
import orderReducer from "./orderReducer";

export default function saveToLocalStorage(name, state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(name, serializedState);
  } catch (e) {
    console.error(e);
  }
}

export function loadFromLocalStorage(name) {
  try {
    const serializedState = localStorage.getItem(name);
    if (serializedState === null) return false;
    return JSON.parse(serializedState);
  } catch (e) {
    return null;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
  car: carReducer,
  order: orderReducer,
  point: pointReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
