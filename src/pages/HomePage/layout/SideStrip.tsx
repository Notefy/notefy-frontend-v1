import { FC } from "react";
import { IconButton } from "component";
import { AddIcon, MenuIcon, SettingsIcon, UserIcon } from "assets/icons";

interface SideStripProps {
    toogleSideSection: () => void;
}

const SideStrip: FC<SideStripProps> = ({ toogleSideSection }) => {
    return (
        <div className="flex flex-col items-center justify-between flex-none h-full pt-4 pb-6 bg-gray-800 w-14">
            <div className="flex flex-col justify-between">
                <IconButton icon={<MenuIcon />} onClick={toogleSideSection} />
                <IconButton
                    icon={<AddIcon />}
                    onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
                <IconButton
                    icon={<SettingsIcon />}
                    onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
            </div>
            <IconButton
                icon={<UserIcon />}
                onClick={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        </div>
    );
};

export default SideStrip;
