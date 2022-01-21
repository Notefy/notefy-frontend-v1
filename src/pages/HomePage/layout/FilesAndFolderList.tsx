import { FolderIcon } from "assets/icons";
import { FC } from "react";
import FileTile from "./FileTile";

const FilesAndFolderList: FC = () => {
    return (
        <div className="flex flex-col h-full max-w-md py-4 bg-gray-700 grow">
            <div>Folder List </div>
            <ul>
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
            </ul>
        </div>
    );
};

export default FilesAndFolderList;
