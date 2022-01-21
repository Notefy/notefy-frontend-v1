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
        <div className="flex items-center justify-end h-16 p-4 bg-gray-700">
            <ReadIcon />
            <SaveIcon />
            <DownloadIcon />
            <VerticalLayoutIcon />
            <HorizontalLayout />
        </div>
    );
};

export default ToolBar;
