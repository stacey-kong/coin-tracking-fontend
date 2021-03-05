import { createStore, Store } from "redux";

import { AppState, rootReducer } from "./rootReducer";

const store: Store<AppState> = createStore(rootReducer);

export default store;
