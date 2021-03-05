export interface AlertMessage {
  type: "error" | "success" | "warning" | "default";
  message: String;
}

export interface alertState {
  open: boolean;
  messages?: AlertMessage;
}
export enum alertConstants {
  SUCCESS = "ALERT_SUCCESS",
  ERROR = "ALERT_ERROR",
  Clear = "ALERT_Delete",
}

interface AlertSuccessAction {
  type: typeof alertConstants.SUCCESS;
  payload: AlertMessage;
}

interface AlertErrorAction {
  type: typeof alertConstants.ERROR;
  payload: AlertMessage;
}

interface AlertClearAction {
  type: typeof alertConstants.Clear;
}

export type AlertActionTypes =
  | AlertSuccessAction
  | AlertErrorAction
  | AlertClearAction;
