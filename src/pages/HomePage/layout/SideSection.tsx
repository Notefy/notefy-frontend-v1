import { FC, useContext } from "react";
import { Theme, ThemeContext } from "config/theme";
import FilesAndFolderList from "./FilesAndFolderList";
import SearchBar from "./SearchBar";

const SideSection: FC = () => {
     const theme = useContext<Theme>(ThemeContext);
     const finalClassName = `flex flex-col items-center justify-between flex-none h-full pt-4 pb-6 ${theme?.primary?.[500]} w-14`;
     
    return (
        <div className="z-50 flex flex-col h-full max-w-sm py-4 bg-gray-100 grow drop-shadow">
            <SearchBar />
            <FilesAndFolderList />
        </div>
    );
};

export default SideSection;
