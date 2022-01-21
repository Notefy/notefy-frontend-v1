import { FC } from "react";
import FilesAndFolderList from "./FilesAndFolderList";
import SearchBar from "./SearchBar";

const SideSection: FC = () => {
    return (
        <div className="flex flex-col h-full max-w-md py-4 bg-gray-700 grow">
            <SearchBar />
            <FilesAndFolderList />
        </div>
    );
};

export default SideSection;
