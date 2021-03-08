// export interface AlertMessage {
//   type: "error" | "success" | "warning" | "default";
//   message: String;
// }

export interface alertState {
  open: boolean;
  messages?: string;
  type: "error" | "success" | "warning" | "default";
}
export enum alertConstants {
  SUCCESS = "ALERT_SUCCESS",
  ERROR = "ALERT_ERROR",
  WARNING = "ALERT_WARNING",
  NORMAL = "ALERT_NORMAL",
  CLEAR = "ALERT_Delete",
}

interface AlertSuccessAction {
  type: typeof alertConstants.SUCCESS;
  message: string;
}

interface AlertErrorAction {
  type: typeof alertConstants.ERROR;
  message: string;
}
interface AlertWarningAction {
  type: typeof alertConstants.WARNING;
  message: string;
}
interface AlertNormaltAction {
  type: typeof alertConstants.NORMAL;
  message: string;
}
interface AlertClearAction {
  type: typeof alertConstants.CLEAR;
}

export type AlertActionTypes =
  | AlertSuccessAction
  | AlertErrorAction
  | AlertClearAction
  | AlertWarningAction
  | AlertNormaltAction ;
