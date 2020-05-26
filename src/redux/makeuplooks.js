import * as ActionTypes from "./ActionTypes";

export const Makeuplooks = (
  state = { isLoading: true, errMess: null, makeuplooks: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_MAKEUPLOOKS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        makeuplooks: action.payload,
      };

    case ActionTypes.MAKEUPLOOKS_LOADING:
      return { ...state, isLoading: true, errMess: null, makeuplooks: [] };

    case ActionTypes.MAKEUPLOOKS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
