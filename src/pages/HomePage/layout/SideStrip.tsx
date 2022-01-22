import { FC, useContext } from "react";
import { IconButton } from "component";
import { AddIcon, MenuIcon, SettingsIcon, UserIcon } from "assets/icons";
import { Theme, ThemeContext } from "config/theme";

interface SideStripProps {
    toogleSideSection: () => void;
}

const SideStrip: FC<SideStripProps> = ({ toogleSideSection }) => {
    const theme = useContext<Theme>(ThemeContext);
    const finalClassName = `flex flex-col items-center justify-between flex-none h-full pt-4 pb-6 ${theme?.primary?.[500]} w-14 drop-shadow`;

    return (
        <div className={finalClassName}>
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
