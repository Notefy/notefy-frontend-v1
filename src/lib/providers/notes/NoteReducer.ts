import { NoteAction, NoteState } from "./NoteConstant";

export const reducer = (state: NoteState, action: NoteAction) => {
    switch (action.type) {
        case "loaded": {
            return {
                ...state,
                isLoading: false,
                isError: false,
                ...action.payload,
            };
        }
        case "loading": {
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        }
        case "error": {
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        }
        default:
            return state;
    }
};
