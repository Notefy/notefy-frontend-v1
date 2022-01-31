import { AddIcon } from "assets/icons";
import { IconButton, Modal } from "component";
import useModal from "lib/hook/useModal";
import { useFilesListContext } from "lib/providers/filesList";
import {
    fileTypeInterface,
    onCreateFolderInterface,
    onCreateNoteInterface,
} from "lib/providers/filesList/FilesConstants";
import { useState } from "react";
import AddFileModal from "./AddFileModal";

const AddFileDropdown = () => {
    const { filesListState, onCreateFile } = useFilesListContext();
    const [selectionType, setSelectionType] = useState<fileTypeInterface>();
    const {
        isShowing: isShowingNoteModal,
        toggle: toogleNoteModal,
        close: closeNoteModal,
    } = useModal();
    const [showSelect, setShowSelect] = useState(false);
    const [name, setName] = useState<string>("");

    const noteSubmit = () => {
        const note: onCreateNoteInterface = {
            type: "note",
            title: name,
            data: "",
            path: filesListState.filesList.path || "",
            tags: [],
        };
        if (onCreateFile !== null) onCreateFile(note);
        closeNoteModal();
    };

    const folderSubmit = () => {
        const folder: onCreateFolderInterface = {
            type: "folder",
            name,
            path: filesListState.filesList.path || "",
        };
        if (onCreateFile !== null) onCreateFile(folder);
        closeNoteModal();
    };

    const listClassName = `text-gray-800 block px-4 py-2 text-sm hover:bg-purple-300 mx-1 rounded`;

    return (
        <div className="relative inline-block text-left z-40">
            {selectionType === "note" && (
                <Modal>
                    <AddFileModal
                        addModalClose={() => {
                            setSelectionType(undefined);
                            closeNoteModal();
                        }}
                        title="Note"
                        onSubmit={noteSubmit}
                        value={name}
                        setValue={setName}
                    />
                </Modal>
            )}
            {selectionType === "folder" && (
                <Modal>
                    <AddFileModal
                        addModalClose={() => {
                            setSelectionType(undefined);
                            closeNoteModal();
                        }}
                        title="Folder"
                        onSubmit={folderSubmit}
                        value={name}
                        setValue={setName}
                    />
                </Modal>
            )}
            <IconButton
                icon={<AddIcon />}
                onClick={() => {
                    setShowSelect(!showSelect);
                }}
            />

            {/* Dropdown menu, show/hide based on menu state.
                Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95" */}

            {showSelect && (
                <div
                    className="origin-top-left absolute left-4 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-40"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                >
                    <div className="py-1" role="none">
                        <div
                            className={listClassName}
                            onClick={() => {
                                setShowSelect(!showSelect);
                                setSelectionType("note");
                            }}
                        >
                            Note
                        </div>
                        <div
                            className={listClassName}
                            onClick={() => {
                                setShowSelect(!showSelect);
                                setSelectionType("folder");
                            }}
                        >
                            Folder
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddFileDropdown;
