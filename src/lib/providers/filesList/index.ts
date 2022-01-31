import FilesProvider, {
    FilesListContextInterface,
    FilesListContext,
    useFilesListContext,
    InitialState,
} from "./FilesProvider";
import { reducer } from "./FilesReducer";
import {
    FilesListAction,
    FilesListState,
    fileTypeInterface,
    folderInterface,
    onGetFilesInterface,
} from "./FilesConstants";

export type {
    FilesListContextInterface,
    FilesListAction,
    FilesListState,
    fileTypeInterface,
    folderInterface,
    onGetFilesInterface,
};
export {
    FilesProvider,
    FilesListContext,
    useFilesListContext,
    reducer as FilesReducer,
    InitialState as FilesListInitialState,
};
