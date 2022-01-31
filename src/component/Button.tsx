import { useContext, FC } from "react";
import { ThemeContext } from "config/theme/ThemeContext";
import { Theme } from "config/theme/theme.interface";

interface ButtonProps {
    icon?: React.ReactNode;
    text: string;
    onClick: () => void;
    backgroundColor?: string;
    hoverText?: string;
    hoverColor?: string;
    textColor?: string;
    children?: React.ReactNode;
    direction?: string;
    className?: string;
}

const Button: FC<ButtonProps> = ({
    icon,
    text,
    textColor,
    backgroundColor,
    hoverColor,
    onClick,
    className,
}) => {
    const theme = useContext<Theme>(ThemeContext);
    const buttonBGColor =
        backgroundColor || theme?.primary?.[600] || " bg-gray-200 ";
    const buttonHoverColor =
        hoverColor || "hover:" + theme?.primary?.[500] || " bg-gray-200 ";
    const buttonTextColor = textColor || " text-gray-100 ";
    const finalClassName = `mt-4 p-1 rounded-sm font-medium transition duration-300 ${buttonBGColor} ${buttonHoverColor} ${buttonTextColor} ${className}`;
    return (
        <button className={finalClassName} onClick={onClick}>
            {icon}
            {text}
        </button>
    );
};

export default Button;
