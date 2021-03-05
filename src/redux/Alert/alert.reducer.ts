import {
  alertState,
  alertConstants,
  AlertActionTypes
} from "./alert.types";

const initialState: alertState = {
  open: false,
  messages: { type: "default", message: "" },
};

export default function alertReducer(
  state = initialState,
  action: AlertActionTypes 
): alertState {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        open: true,
        messages: action.payload,
      };
    case alertConstants.ERROR:
      return {
        open: true,
        messages: action.payload,
      };
    case alertConstants.Clear:
      return {
        open: false,
      };
    default:
      return state;
  }
}
