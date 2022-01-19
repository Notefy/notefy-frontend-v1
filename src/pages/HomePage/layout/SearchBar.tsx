import { useState, FC, ChangeEvent, KeyboardEvent } from "react";
import { EnterIcon, ExpandIcon, SearchIcon } from "assets/icons";
import { IconButton } from "component";

const SearchBar: FC = () => {
    const [searchText, setSearchText] = useState<string>("");

    const updateList = () => {
        console.log("Search List");
    };

    const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearchText(event.target.value);
    };

    const onEnterPressed = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") updateList();
    };

    return (
        <div className="flex flex-col items-center container px-4">
            <div className="relative w-full bg-gray-600 rounded-md">
                <div className="flex container mx-auto p-2">
                    <SearchIcon height="h-6" width="w-6" className="mx-2" />
                    <input
                        id="searchfield"
                        className="w-full bg-gray-600 text-grey-800 transition focus:outline-none focus:border-transparent appearance-none leading-normal"
                        type="search"
                        placeholder="Search..."
                        value={searchText}
                        onChange={onSearch}
                        onKeyDown={onEnterPressed}
                    />
                    <IconButton
                        icon={
                            <ExpandIcon
                                height="h-6"
                                width="w-6"
                                className="mx-1"
                            />
                        }
                        onClick={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                    />

                    <IconButton
                        icon={
                            <EnterIcon
                                height="h-6"
                                width="w-6"
                                className="mx-1"
                            />
                        }
                        onClick={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                    />
                </div>
            </div>
            <div>Advanced Search</div>
        </div>
    );
};

export default SearchBar;
