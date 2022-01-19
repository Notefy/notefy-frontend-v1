import { FC } from "react";

interface FileTimeProps {
    icon?: React.ReactNode;
    title: string;
    subtitle?: string;
    isSelected?: boolean;
    className?: string;
    onClick: () => void;
}

const FileTile: FC<FileTimeProps> = ({
    icon,
    title,
    subtitle,
    isSelected,
    className,
}) => {
    const colorClassName = isSelected && "bg-gray-600";
    const outerDivClassName = `flex items-center ${className} ${colorClassName} h-16 p-4`;
    const concatinatedSubtitle = subtitle?.slice(0, 20) + " ...";
    return (
        <div className={outerDivClassName}>
            {icon && <div className="pr-4">{icon}</div>}
            <div className="">
                <div className="font-semibold">{title}</div>
                {subtitle && (
                    <div className="text-gray-400 font-light">
                        {concatinatedSubtitle}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileTile;
