export interface LoadingState {
  loading: boolean;
}
export enum LoadingConstants {
  LOADING = "LOADING_LOADING",
  COMPLETED = "LOADING_COMPLETED",
}

interface LoadingAction {
  type: typeof LoadingConstants.LOADING;
}

interface LoadingCompleteAction {
  type: typeof LoadingConstants.COMPLETED;
}

export type LoadingActionTypes = LoadingAction | LoadingCompleteAction;
