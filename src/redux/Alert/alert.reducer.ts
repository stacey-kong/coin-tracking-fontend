import { alertState, alertConstants, AlertActionTypes } from "./alert.types";

const initialState: alertState = {
  open: false,
  messages: "",
  type: "default",
};

export default function alertReducer(
  state = initialState,
  action: AlertActionTypes
): alertState {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        open: true,
        messages: action.message,
        type: "success",
      };
    case alertConstants.ERROR:
      return {
        open: true,
        messages: action.message,
        type: "error",
      };
    case alertConstants.WARNING:
      return {
        open: true,
        messages: action.message,
        type: "warning",
      };
    case alertConstants.NORMAL:
      return {
        open: true,
        messages: action.message,
        type: "default",
      };
    case alertConstants.CLEAR:
      return {
        open: false,
        messages: "",
        type: "default",
      };
    default:
      return state;
  }
}
