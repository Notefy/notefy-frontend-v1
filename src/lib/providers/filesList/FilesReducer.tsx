import { FilesListAction, FilesListState } from "./FilesConstants";

export const reducer = (state: FilesListState, action: FilesListAction) => {
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
