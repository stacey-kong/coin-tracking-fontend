import { loginConstants, LoginActionTypes } from "./user.types";

// send alertmessage

function success(): LoginActionTypes {
  return { type: loginConstants.SUCCESS };
}

function error(): LoginActionTypes {
  return { type: loginConstants.ERROR };
}

function warning(): LoginActionTypes {
  return { type: loginConstants.WARNING };
}

export const userActions = {
  success,
  error,
  warning,
};
