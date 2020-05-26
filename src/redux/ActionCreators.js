import * as ActionTypes from "./ActionTypes";
import { MAKEUPLOOKS } from "../shared/makeuplooks";

export const addComment = (makeuplookId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    makeuplookId: makeuplookId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

export const fetchMakeuplooks = () => (dispatch) => {
  dispatch(makeuplooksLoading(true));

  setTimeout(() => {
    dispatch(addMakeuplooks(MAKEUPLOOKS));
  }, 2000);
};

export const makeuplooksLoading = () => ({
  type: ActionTypes.MAKEUPLOOKS_LOADING,
});

export const makeuplooksFailed = (errmess) => ({
  type: ActionTypes.MAKEUPLOOOKS_FAILED,
  payload: errmess,
});

export const addMakeuplooks = (makeuplooks) => ({
  type: ActionTypes.ADD_MAKEUPLOOKS,
  payload: makeuplooks,
});
// Action Type needs to be sent to the store
