import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from ".";

export interface AuthGuardProps {
    children?: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
    const { authState } = useAuthContext();
    const location = useLocation();

    return authState.isLogin === true ? (
        children
    ) : (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
    );
};

export default AuthGuard;
