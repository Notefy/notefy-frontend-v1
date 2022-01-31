import { Button, TextInput } from "component";
import { useAuthContext } from "lib/providers/auth";
import { FC, useState } from "react";

interface SignUpFormProps {
    changeIsLogIn: () => void;
}

const SignUpForm: FC<SignUpFormProps> = ({ changeIsLogIn }) => {
    const { onSignUp } = useAuthContext();

    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isRemember, setIsRemember] = useState<boolean>(false);

    const handleSubmit = (): void => {
        if (onSignUp != null)
            onSignUp({ email, name, password, rememberMe: isRemember });
    };

    return (
        <>
            <div className="mt-4">
                <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="name-input"
                >
                    Name
                </label>
                <TextInput
                    id="name-input"
                    name="name"
                    placeholder="Name"
                    value={name}
                    setValue={setName}
                />
            </div>
            <div className="mt-4">
                <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="email-input"
                >
                    Email
                </label>
                <TextInput
                    id="email-input"
                    name="email"
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                />
            </div>

            <div className="mt-4">
                <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="password-input"
                >
                    Password
                </label>
                <TextInput
                    id="password-input"
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                />
            </div>
            <div className="flex justify-between mt-4">
                <div>
                    <label
                        className="block text-sm text-gray-700"
                        htmlFor="remember-me"
                    >
                        <input
                            id="remember-me"
                            className="mr-2 accent-purple-500"
                            type="checkbox"
                            value="remember-me"
                            checked={isRemember}
                            onChange={(e) => {
                                setIsRemember(!isRemember);
                            }}
                        />
                        Remember me
                    </label>
                </div>
                {/* <div>Forgot Password?</div> */}
            </div>
            <Button className="w-full " text="Sign in" onClick={handleSubmit} />
            <div className="flex flex-row justify-center my-4">
                <span className="absolute bg-gray-100 px-4 text-gray-500">
                    or continue with
                </span>
                <div className="w-full bg-gray-200 mt-3 h-px"></div>
            </div>
            <div className="flex">
                <Button
                    className="w-full mr-2 border disabled"
                    text="Google"
                    backgroundColor="bg-gray-100"
                    textColor="text-gray-700 hover:text-gray-100"
                    onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
                <Button
                    className="w-full ml-2 border"
                    text="Github"
                    backgroundColor="bg-gray-100"
                    textColor="text-gray-700 hover:text-gray-100"
                    onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
            </div>
            <Button
                className="w-full border"
                text="Local Storage"
                backgroundColor="bg-gray-100"
                textColor="text-gray-700 hover:text-gray-100"
                onClick={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
            <div
                className="flex justify-end mt-4 text-sm"
                onClick={changeIsLogIn}
            >
                Already have an acount?
            </div>
        </>
    );
};

export default SignUpForm;
