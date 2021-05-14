import { LoadingConstants, LoadingActionTypes } from "./loading.types";

// send alertmessage

function loading(): LoadingActionTypes {
  return { type: LoadingConstants.LOADING };
}

function complete(): LoadingActionTypes {
  return { type: LoadingConstants.COMPLETED };
}


export const loadingActions = {
  loading,
  complete,
};
