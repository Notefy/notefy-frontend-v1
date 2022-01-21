import { useContext, FC } from "react";
import { Theme, ThemeContext } from "config/theme";
import IconProps from "./icon.interface";

const VerticalLayoutIcon: FC<IconProps> = ({
    color,
    height,
    width,
    className,
}) => {
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
            <rect x="4" y="4" width="16" height="16" rx="2" />{" "}
            <line x1="4" y1="12" x2="20" y2="12" />
        </svg>
    );
};

export default VerticalLayoutIcon;
