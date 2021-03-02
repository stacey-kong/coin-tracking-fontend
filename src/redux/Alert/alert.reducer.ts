import { alertState, alertConstants, AlertActionTypes } from "./alert.types";

const initialState: alertState = {
  messages: [],
};

export default function alertReducer(
  state = initialState,
  action: AlertActionTypes
): alertState {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        messages: [...state.messages, action.payload],
      };
    case alertConstants.ERROR:
      return {
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
}
