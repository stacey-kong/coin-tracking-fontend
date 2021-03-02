export interface AlertMessage {
  type: String;
  message: String;
}

export interface alertState {
  messages: AlertMessage[];
}

export const alertConstants = {
  SUCCESS: "ALERT_SUCCESS",
  ERROR: "ALERT_ERROR",
};

interface AlertSuccessAction {
  type: typeof alertConstants.SUCCESS;
  payload: AlertMessage;
}

interface AlertErrorAction {
  type: typeof alertConstants.ERROR;
  payload: AlertMessage;
}

export type AlertActionTypes = AlertSuccessAction | AlertErrorAction;
