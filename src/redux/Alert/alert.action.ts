import { alertConstants,  AlertActionTypes } from "./alert.types";

function success(newmessage: string): AlertActionTypes {
  return { type: alertConstants.SUCCESS, message: newmessage };
}

function error(newmessage: string): AlertActionTypes {
  return { type: alertConstants.ERROR, message: newmessage };
}
function warning(newmessage: string): AlertActionTypes {
  return { type: alertConstants.WARNING, message: newmessage };
}

function normal(newmessage: string): AlertActionTypes {
  return { type: alertConstants.NORMAL, message: newmessage };
}

function clear(): AlertActionTypes {
  return { type: alertConstants.CLEAR };
}

export const alertActions = {
  success,
  error,
  warning,
  normal,
  clear
};
