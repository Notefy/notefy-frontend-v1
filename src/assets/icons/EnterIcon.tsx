import { useContext, FC } from "react";
import { Theme, ThemeContext } from "config/theme";
import IconProps from "./icon.interface";

const EnterIcon: FC<IconProps> = ({ color, height, width, className }) => {
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
            <path d="M18 6v6a3 3 0 0 1 -3 3h-10l5 -5m0 10l-5 -5" />
        </svg>
    );
};

export default EnterIcon;
