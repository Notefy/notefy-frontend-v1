import { useContext, FC } from "react";
import { ThemeContext } from "config/theme/ThemeContext";
import { Theme } from "config/theme/theme";

interface ButtonProps {
    icon?: React.ReactNode;
    text: string;
    onClick: () => void;
    backgroundColor?: string;
    hoverText?: string;
    hoverColor?: string;
    children?: React.ReactNode;
    direction?: string;
    className?: string;
}

const Button: FC<ButtonProps> = ({
    icon,
    text,
    backgroundColor,
    onClick,
    className,
}) => {
    const theme = useContext<Theme>(ThemeContext);
    const buttonBGColor =
        backgroundColor || theme?.primary?.main || " bg-gray-200 ";
    const finalClassName = `${className} ${buttonBGColor}`;
    return (
        <button className={finalClassName} onClick={onClick}>
            {icon}
            {text}
        </button>
    );
};

export default Button;
