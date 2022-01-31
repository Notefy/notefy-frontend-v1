import { FolderIcon } from "assets/icons";
import { folderInterface, useFilesListContext } from "lib/providers/filesList";
import { useNoteContext } from "lib/providers/notes";
import { noteInterface } from "lib/providers/notes/NoteConstant";
import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FileTile from "./FileTile";

const FilesAndFolderList: FC = () => {
    const { onGetFiles, filesListState } = useFilesListContext();
    const { onGetNote } = useNoteContext();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (onGetFiles != null && params.fileId === undefined)
            onGetFiles({ fileID: null });
        if (onGetFiles != null) onGetFiles({ fileID: params.fileId });
    }, [params.fileId]);

    return (
        <div className="flex flex-col h-full max-w-md py-4 grow">
            <div>Folder List </div>
            {filesListState.filesList?.children.count.folders === 0 &&
            filesListState.filesList?.children.count.notes === 0 ? (
                <div>No files</div>
            ) : (
                <ul>
                    {filesListState.filesList?.children.folders.map(
                        (folder: folderInterface) => {
                            return (
                                <FileTile
                                    key={folder._id}
                                    icon={<FolderIcon />}
                                    title={folder.name}
                                    isSelected={false}
                                    onClick={() =>
                                        navigate(`/home/${folder._id}`)
                                    }
                                />
                            );
                        }
                    )}
                    {filesListState.filesList?.children.notes.map(
                        (note: noteInterface) => {
                            return (
                                <FileTile
                                    key={note._id}
                                    title={note.title}
                                    subtitle={note.data}
                                    isSelected={false}
                                    onClick={() => {
                                        if (onGetNote != null)
                                            onGetNote({ fileID: note._id });
                                    }}
                                />
                            );
                        }
                    )}
                </ul>
            )}
        </div>
    );
};

export default FilesAndFolderList;
