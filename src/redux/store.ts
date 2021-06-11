import {
  createStore,
  Store,
  applyMiddleware,
  Middleware,
  compose,
} from "redux";
import thunkMiddleware from "redux-thunk";

import { AppState, rootReducer } from "./rootReducer";

let middleware: Middleware[] = [];
if (process.env.NODE_ENV === "production") {
  middleware = [...middleware, thunkMiddleware];
} else {
  middleware = [
    ...middleware,
    thunkMiddleware,
    require("redux-logger").default,
  ];
}

const store: Store<AppState> = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware))
);

export default store;
