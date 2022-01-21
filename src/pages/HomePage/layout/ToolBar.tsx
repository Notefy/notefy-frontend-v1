import {
    DownloadIcon,
    HorizontalLayout,
    ReadIcon,
    SaveIcon,
    VerticalLayoutIcon,
} from "assets/icons";
import { FC } from "react";

const ToolBar: FC = () => {
    return (
        <div className="flex items-center justify-end bg-gray-700 h-16 p-4">
            <ReadIcon />
            <SaveIcon />
            <DownloadIcon />
            <VerticalLayoutIcon />
            <HorizontalLayout />
        </div>
    );
};

export default ToolBar;
