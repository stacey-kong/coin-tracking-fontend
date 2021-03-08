import { createStore, Store, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import { AppState, rootReducer } from "./rootReducer";

const loggerMiddleware = createLogger();

const store: Store<AppState> = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;
