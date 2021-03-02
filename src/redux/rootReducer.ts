import { combineReducers } from "redux";

import alertReducer from "./Alert/alert.reducer";
// import userReducer from "./User/user.reducer";

const rootReducer = combineReducers({
  alert: alertReducer,
  // user: userReducer,
});

export default rootReducer;
