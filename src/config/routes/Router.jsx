import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import SignUpPage from "pages/SignUpPage";
import RootPage from "pages/RootPage";
import { AuthGuard } from "lib/providers/auth";

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <AuthGuard>
                        <RootPage />
                    </AuthGuard>
                }
            />
            <Route path="/home">
                <Route
                    path=""
                    element={
                        <AuthGuard>
                            <HomePage />
                        </AuthGuard>
                    }
                />
                <Route
                    path=":fileId"
                    element={
                        <AuthGuard>
                            <HomePage />
                        </AuthGuard>
                    }
                />
            </Route>
            <Route path="/login" element={<SignUpPage />} />
        </Routes>
    );
};

export default AppRouter;
