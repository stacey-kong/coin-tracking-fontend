import {
  alertConstants,
  AlertMessage,
  AlertActionTypes
} from "./alert.types";

export function success(newmessage: AlertMessage): AlertActionTypes{
  return { type: alertConstants.SUCCESS, payload: newmessage };
}

export function error(newmessage: AlertMessage): AlertActionTypes {
  return { type: alertConstants.ERROR, payload: newmessage };
}


