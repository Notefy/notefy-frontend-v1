import { FC } from "react";
import { MdMenu, MdAdd, MdSettings, MdAccountCircle } from "react-icons/md";
import { Button } from "component";
import { ThemeContextProvider } from "config/theme";
import { theme2 } from "config/theme/theme";
import { SettingsIcon } from "assets/icons";

const SideStrip: FC = () => {
    return (
        <div className="flex-none flex flex-col items-center justify-between bg-gray-800 h-full w-14 pt-4 pb-6">
            <div className="flex flex-col justify-between">
                <button>
                    <MdMenu className="w-8 h-8" />
                </button>
                <button>
                    <MdAdd className="w-8 h-8 my-4" />
                </button>
                <button>
                    <MdSettings className="w-8 h-8" />
                </button>
                <Button
                    icon={<SettingsIcon height="h-10" width="w-10" />}
                    text="Account"
                    onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
                <ThemeContextProvider theme={theme2}>
                    <Button
                        icon={<SettingsIcon />}
                        text="Account"
                        onClick={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                    />
                </ThemeContextProvider>
            </div>
            <button>
                <MdAccountCircle className="w-8 h-8" />
            </button>
        </div>
    );
};

export default SideStrip;
