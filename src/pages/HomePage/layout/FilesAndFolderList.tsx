import { FolderIcon } from "assets/icons";
import { FC } from "react";
import FileTile from "./FileTile";

const FilesAndFolderList: FC = () => {
    return (
        <div className="flex flex-col grow bg-gray-700 h-full max-w-md py-4">
            <div>Folder List </div>
            <FileTile
                icon={<FolderIcon />}
                title="Folder Name"
                onClick={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
            <FileTile
                icon={<FolderIcon />}
                title="Folder Name"
                isSelected={true}
                onClick={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
            <FileTile
                title="File Name"
                subtitle="subtitle name"
                onClick={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
            <FileTile
                title="File Name"
                subtitle="subtitle name"
                isSelected={true}
                onClick={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        </div>
    );
};

export default FilesAndFolderList;
