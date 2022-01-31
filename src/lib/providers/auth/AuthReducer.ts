import { AuthAction, AuthState } from "./AuthConstants";

export const reducer = (state: AuthState, action: AuthAction) => {
    switch (action.type) {
        case "logged_in": {
            return {
                ...state,
                isLoading: false,
                isLogin: true,
                isError: false,
                ...action.payload,
            };
        }
        case "logged_out": {
            return {
                ...state,
                currentUser: null,
                userData: null,
                isLoading: false,
                isLogin: false,
                isError: false,
            };
        }
        case "update_user": {
            return {
                ...state,
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
