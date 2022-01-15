import { useContext, FC } from "react";
import { ThemeContext } from "config/theme/ThemeContext";
import { Theme } from "config/theme/theme";

interface ButtonProps {
    icon: React.ReactNode;
    text?: string;
    children?: React.ReactNode;
    onClick: () => void;
    className?: string;
}

const Button: FC<ButtonProps> = ({ icon, onClick }) => {
    const theme = useContext<Theme>(ThemeContext);
    console.log(theme?.icon?.color);
    return <button onClick={onClick}>{icon}</button>;
};

export default Button;
