export interface FilesListState {
    isLoading: boolean;
    isError: boolean;
    filesList: any | null;
}

interface BaseFilesListState {
    type: "loading" | "error";
}

interface CustomFilesListState {
    type: "loaded" | "updating";
    payload: Partial<FilesListState>;
}

export type FilesListAction = BaseFilesListState | CustomFilesListState;

export interface onGetFilesInterface {
    fileID?: string | null;
}

export interface onCreateNoteInterface {
    type: "note";
    title: string;
    data: string;
    path: string[];
    tags: string[];
}

export interface onCreateFolderInterface {
    type: "folder";
    name: string;
    path: string[];
}

export type onCreateFilesInterface =
    | onCreateNoteInterface
    | onCreateFolderInterface;

export interface onUpdateNoteInterface {
    title: string;
    data: string;
    path: string;
    color: string;
    tags: string[];
}

export interface onUpdateFolderInterface {
    type: any;
    name: string;
    path: string;
}

export type onUpdateFilesInterface =
    | onUpdateNoteInterface
    | onUpdateFolderInterface;

export type fileTypeInterface = "note" | "folder";

export interface folderInterface {
    type: "folder";
    name: string;
    path: "";
    _id: string;
}
