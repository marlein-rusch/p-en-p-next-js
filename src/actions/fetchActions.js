import { ADD_FETCHED_CONTENT_PER_CATEGORY, INCREMENT, SWITCH_LANGUAGE } from "./types";

export function increment() {
	return function(dispatch) {
		dispatch({ type: INCREMENT });
	};
}

export function switchLanguage() {
	return function(dispatch) {
		dispatch({ type: SWITCH_LANGUAGE });
	};
}

export function addFetchToState(payload, category) {
	return function(dispatch) {
		dispatch({ type: ADD_FETCHED_CONTENT_PER_CATEGORY, payload, category });
	};
}
