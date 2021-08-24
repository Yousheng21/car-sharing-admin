import { applyMiddleware, createStore, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import appReducer from "./appReducer";

export default function saveToLocalStorage(name, state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(name, serializedState);
  } catch (e) {
    console.log(e);
  }
}

export function loadFromLocalStorage(name) {
  try {
    const serializedState = localStorage.getItem(name);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
