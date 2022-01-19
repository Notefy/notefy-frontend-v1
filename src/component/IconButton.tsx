import { useContext, FC } from "react";
import { ThemeContext } from "config/theme/ThemeContext";
import { Theme } from "config/theme/theme";

interface IconButtonProps {
    icon: React.ReactNode;
    onClick: () => void;
    backgroundColor?: string;
    hoverText?: string;
    hoverColor?: string;
    className?: string;
}

const IconButton: FC<IconButtonProps> = ({
    icon,
    onClick,
    backgroundColor,
    hoverText,
    className,
}) => {
    const theme = useContext<Theme>(ThemeContext);
    const iconButtonBGColor = backgroundColor || theme?.primary?.main;
    const finalClassName = `${className} ${iconButtonBGColor}`;
    return (
        <button onClick={onClick} className={finalClassName}>
            {icon}
        </button>
    );
};

export default IconButton;
