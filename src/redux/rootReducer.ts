import { combineReducers } from "redux";

import alertReducer from "./Alert/alert.reducer";
import { alertState } from "./Alert/alert.types";
import { LoadingState } from "./Loading/loading.types";
import loadingReducer from "./Loading/loading.reducer";
import userReducer from "./User/user.reducer";
import { LoginState } from "./User/user.types";

export interface AppState {
  alert: alertState;
  user: LoginState;
  loading: LoadingState;
}

export const rootReducer = combineReducers<AppState>({
  alert: alertReducer,
  user: userReducer,
  loading: loadingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
