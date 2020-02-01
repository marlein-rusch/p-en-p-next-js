import { ADD_FETCHED_CONTENT_PER_CATEGORY, INCREMENT } from "./types";

export function increment() {
    return function(dispatch) {
      dispatch({ type: INCREMENT });
    };
  }

export function addFetchToState(payload, category) {
    return function (dispatch) {
        dispatch({ type: ADD_FETCHED_CONTENT_PER_CATEGORY, payload, category });
    };
}
