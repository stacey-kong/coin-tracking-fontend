

export interface LoginState {
  login: boolean;
}
export enum loginConstants {
  SUCCESS = "USER_LOGIN_SUCCESS",
  ERROR = "USER_LOGIN_ERROR",
  WARNING = "USER_LOGIN_WARNING",
  LOGOUT ="USERS_LOGOUT"
}

interface LoginSuccessAction {
  type: typeof loginConstants.SUCCESS;
}

interface LoginErrorAction {
  type: typeof loginConstants.ERROR;
}

interface LoginWarningAction {
  type: typeof loginConstants.WARNING;
}

export type LoginActionTypes =
  | LoginSuccessAction
  | LoginErrorAction
  | LoginWarningAction;
