import { alertConstants, AlertMessage, AlertActionTypes } from "./alert.types";

function success(newmessage: AlertMessage): AlertActionTypes {
  return { type: alertConstants.SUCCESS, payload: newmessage };
}

function error(newmessage: AlertMessage): AlertActionTypes {
  return { type: alertConstants.ERROR, payload: newmessage };
}

function clear(): AlertActionTypes {
  return { type: alertConstants.Clear };
}

export const alertActions = {
  success,
  error,
  clear
};
