import { LoginState, loginConstants, LoginActionTypes } from "./user.types";

const initialState: LoginState = {
  login: false,
};

export default function userReducer(
  state = initialState,
  action: LoginActionTypes
): LoginState {
  switch (action.type) {
    case loginConstants.SUCCESS:
      return {
        login: true,
      };
    case loginConstants.ERROR:
      return {
        login: false,
      };
    case loginConstants.WARNING:
      return {
        login: false,
      };
    default:
      return state;
  }
}
