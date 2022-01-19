import { useContext, FC } from "react";
import { Theme, ThemeContext } from "config/theme";
import IconProps from "./icon.interface";

const UserIcon: FC<IconProps> = ({ color, height, width, className }) => {
    const theme = useContext<Theme>(ThemeContext);
    const heightClassName = height || theme?.icon?.height || " h-8 ";
    const widthClassName = width || theme?.icon?.width || " w-8 ";
    const colorClassName = color || theme?.icon?.color || " text-gray-500 ";
    const finalClassName = `${className} ${heightClassName} ${widthClassName} ${colorClassName}`;
    return (
        <svg
            className={finalClassName}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <circle cx="12" cy="7" r="4" />{" "}
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </svg>
    );
};

export default UserIcon;
