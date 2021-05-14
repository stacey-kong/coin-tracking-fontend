import { LoadingState, LoadingConstants, LoadingActionTypes } from "./loading.types";

const initialState: LoadingState = {
  loading: false,
};

export default function loadingReducer(
  state = initialState,
  action: LoadingActionTypes
): LoadingState {
  switch (action.type) {
    case LoadingConstants.LOADING:
      return {
        loading: true,
      };
    case LoadingConstants.COMPLETED:
      return {
        loading: false,
      };
    default:
      return state;
  }
}
