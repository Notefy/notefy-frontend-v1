import { FC } from "react";

interface FileTileProps {
    icon?: React.ReactNode;
    title: string;
    subtitle?: string;
    isSelected?: boolean;
    className?: string;
    onClick: () => void;
}

const FileTile: FC<FileTileProps> = ({
    icon,
    title,
    subtitle,
    isSelected,
    onClick,
    className,
}) => {
    const colorClassName = isSelected && "bg-gray-300";
    const outerDivClassName = `flex items-center ${className} ${colorClassName} h-16 p-4`;
    const concatinatedSubtitle = subtitle?.slice(0, 20) + " ...";
    return (
        <div className={outerDivClassName} onClick={onClick}>
            {icon && <div className="pr-4">{icon}</div>}
            <div className="">
                <div className="font-semibold">{title}</div>
                {subtitle && (
                    <div className="font-light text-gray-700">
                        {concatinatedSubtitle}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileTile;
