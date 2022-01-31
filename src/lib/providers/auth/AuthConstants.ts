export type AuthAction = UpdateAuthState | BaseAuthState;

interface UpdateAuthState {
    type: "logged_in" | "update_user";
    payload: CustomAuthState;
}

interface BaseAuthState {
    type: "logged_out" | "loading" | "error";
}

export type AuthUserType = "local" | "remote";

export interface BasicAuthState {
    isLogin: boolean;
    isLoading: boolean;
    isError: boolean;
}

export interface CustomAuthState {
    userType: AuthUserType | null;
    currentUser: string | null;
    userData: any | null;
}

export type AuthState = BasicAuthState & CustomAuthState;



export interface signUpInterface {
    name: string;
    email: string;
    password: string;
}

export interface logInInterface {
    email: string;
    password: string;
}
