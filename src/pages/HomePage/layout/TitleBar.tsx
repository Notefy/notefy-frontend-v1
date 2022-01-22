import {
    DownloadIcon,
    HorizontalLayout,
    ReadIcon,
    SaveIcon,
    VerticalLayoutIcon,
} from "assets/icons";
import { FC } from "react";

interface TitleBarProps {
    fileName: string;
}

const TitleBar: FC<TitleBarProps> = ({ fileName }) => {
    return (
        <div className="flex items-center justify-between bg-gray-300 drop-shadow">
            <div className="p-4 bg-gray-200">{fileName}</div>
            <div className="flex items-center justify-end bg-gray-300">
                <ReadIcon height="h-6" width="w-6" className="mr-2" />
                <SaveIcon height="h-6" width="w-6" className="mr-2" />
                <DownloadIcon height="h-6" width="w-6" className="mr-2" />
                <VerticalLayoutIcon height="h-6" width="w-6" className="mr-2" />
                <HorizontalLayout height="h-6" width="w-6" className="mr-2" />
            </div>
        </div>
    );
};

export default TitleBar;
