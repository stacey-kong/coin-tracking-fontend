import { combineReducers } from "redux";

import alertReducer from "./Alert/alert.reducer";
import { alertState } from "./Alert/alert.types";
import userReducer from "./User/user.reducer";
import { LoginState } from "./User/user.types";

export interface AppState {
  alert: alertState;
  user: LoginState;
}

export const rootReducer = combineReducers<AppState>({
  alert: alertReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
