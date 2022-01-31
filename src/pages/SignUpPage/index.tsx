import { useAuthContext } from "lib/providers/auth";
import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LogInSignUpForm from "./layout/LogInSignUpForm";

const SignUpPage: FC = () => {
    const { authState } = useAuthContext();
    const { state }: any = useLocation();
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (authState.isLogin) {
    //         navigate(state?.path || "/home");
    //     }
    // }, []);

    if (authState.isLogin) {
        return <Navigate to={state?.path || "/home"} />;
    }
    return (
        <div className="flex items-stretch h-screen">
            <div className="flex flex-col items-center justify-center basis-1/2 shadow-md shadow-gray-500 bg-gray-800 text-gray-200">
                <div className="text-7xl antialiased font-bold tracking-wider">
                    Note <span className="italic font-semibold">fy</span>
                </div>
                <br />
                <div className="text-gray-400">
                    Minimalistic note taking app
                </div>
            </div>
            <div className="basis-1/2 bg-gray-200">
                <LogInSignUpForm />
            </div>
        </div>
    );
};

export default SignUpPage;
