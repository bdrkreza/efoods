import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./reducers/cartReducers";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export type AppState = ReturnType<typeof rootReducer>;

export default store;
