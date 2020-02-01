import { ADD_FETCHED_CONTENT_PER_CATEGORY, INCREMENT} from "../actions/types";

const initialState = {
    counter: 1
};

export default function (state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
				...state,
				counter: state.counter + 1
			};
        case ADD_FETCHED_CONTENT_PER_CATEGORY:
            return {
				...state,
				[action.category] : action.payload
			};
        default:
            return state;
    }
}
