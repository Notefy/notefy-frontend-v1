import { FC } from "react";
import FilesAndFolderList from "./FilesAndFolderList";
import SearchBar from "./SearchBar";

const SideSection: FC = () => {
    return (
        <div className="flex flex-col grow bg-gray-700 h-full max-w-md py-4">
            <SearchBar />
            <FilesAndFolderList />
        </div>
    );
};

export default SideSection;
