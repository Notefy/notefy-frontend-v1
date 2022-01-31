import { FC, useContext, createContext, useEffect, useReducer } from "react";
import { AuthState, logInInterface, signUpInterface } from "./AuthConstants";
import { reducer } from "./AuthReducer";
import { logIn, signUp } from "./AuthUtility";

type onSignUpInterface = signUpInterface & { rememberMe: boolean };
type onLogInInterface = logInInterface & { rememberMe: boolean };

export interface AuthContextInterface {
    authState: AuthState;
    onLocalLogIn: (() => void) | null;
    onSignUp: ((value: onSignUpInterface) => void) | null;
    onLogIn: ((value: onLogInInterface) => void) | null;
    onLogOut: (() => void) | null;
    onUpdateAccount: (() => void) | null;
}

export const Initial_State: AuthState = {
    isLogin: false,
    isLoading: false,
    isError: false,
    userType: null,
    currentUser: null,
    userData: null,
};

export const AuthContext = createContext<AuthContextInterface>({
    authState: Initial_State,
    onLocalLogIn: null,
    onSignUp: null,
    onLogIn: null,
    onLogOut: null,
    onUpdateAccount: null,
});

export const useAuthContext = () => {
    return useContext(AuthContext);
};

const AuthProvider: FC = ({ children }) => {
    const [authState, authDispatch] = useReducer(reducer, Initial_State);

    const setLoading = () => {
        authDispatch({
            type: "loading",
        });
    };

    const setError = (error: any) => {
        console.log(error);
        authDispatch({
            type: "error",
        });
    };

    useEffect(() => {
        const authLocalData = localStorage.getItem("auth");
        if (authLocalData !== null) {
            const localData = JSON.parse(authLocalData);
            // TODO: Recheck with server for valid token then allow logged_in
            authDispatch({
                type: "logged_in",
                payload: {
                    currentUser: localData.user.name,
                    userData: localData,
                    userType: "remote",
                },
            });
        }
    }, []);

    const onLocalLogIn = () => {
        setLoading();
        try {
            authDispatch({
                type: "logged_in",
                payload: {
                    userType: "local",
                    currentUser: null,
                    userData: null,
                },
            });
        } catch (error) {
            setError(error);
        }
    };

    const onSignUp = async ({
        email,
        name,
        password,
        rememberMe,
    }: onSignUpInterface) => {
        setLoading();
        try {
            const respose = await signUp({
                body: { name, email, password },
            });

            authDispatch({
                type: "logged_in",
                payload: {
                    currentUser: respose.user.name,
                    userData: respose,
                    userType: "remote",
                },
            });
            if (rememberMe)
                localStorage.setItem("auth", JSON.stringify(respose));
        } catch (error) {
            setError(error);
        }
    };

    const onLogIn = async ({
        email,
        password,
        rememberMe,
    }: onLogInInterface) => {
        setLoading();
        try {
            const respose = await logIn({
                body: { email, password },
            });

            authDispatch({
                type: "logged_in",
                payload: {
                    currentUser: respose.user.name,
                    userData: respose,
                    userType: "remote",
                },
            });
            if (rememberMe)
                localStorage.setItem("auth", JSON.stringify(respose));
        } catch (error) {
            setError(error);
        }
    };

    const onLogOut = () => {
        setLoading();
        try {
            localStorage.removeItem("auth");
        } catch (error) {
            setError(error);
        }
    };

    const onUpdateAccount = () => {
        setLoading();
        try {
        } catch (error) {
            setError(error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                authState,
                onLocalLogIn,
                onSignUp,
                onLogIn,
                onLogOut,
                onUpdateAccount,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
