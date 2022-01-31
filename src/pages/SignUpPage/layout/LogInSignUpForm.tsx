import { Button, TextInput } from "component";
import { useAuthContext } from "lib/providers/auth";
import { useState } from "react";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

const LogInSignUpForm = () => {
    const [isLogIn, setIsLogIn] = useState<boolean>(false);
    const { authState } = useAuthContext();

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-xl font-bold m-4">
                {isLogIn ? "Log In" : "Sign Up"}
            </div>
            <div className="bg-gray-100 shadow p-8 rounded-md w-3/5">
                {isLogIn ? (
                    <LogInForm changeIsLogIn={() => setIsLogIn(!isLogIn)} />
                ) : (
                    <SignUpForm changeIsLogIn={() => setIsLogIn(!isLogIn)} />
                )}
            </div>
        </div>
    );
};

export default LogInSignUpForm;
