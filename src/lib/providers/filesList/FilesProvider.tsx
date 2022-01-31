import { createContext, FC, useContext, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../auth";
import {
    FilesListState,
    onCreateFilesInterface,
    onGetFilesInterface,
} from "./FilesConstants";
import { reducer } from "./FilesReducer";
import { createFile, getFiles } from "./FilesUtility";

export interface FilesListContextInterface {
    filesListState: FilesListState;
    onGetFiles: ((value: onGetFilesInterface) => void) | null;
    onCreateFile: ((value: onCreateFilesInterface) => void) | null;
    onUpdateFile: (() => void) | null;
    onDeleteFile: (() => void) | null;
}

export const InitialState: FilesListState = {
    isLoading: false,
    isError: false,
    filesList: null,
};

export const FilesListContext = createContext<FilesListContextInterface>({
    filesListState: InitialState,
    onGetFiles: null,
    onCreateFile: null,
    onUpdateFile: null,
    onDeleteFile: null,
});

export const useFilesListContext = () => {
    return useContext(FilesListContext);
};

const FilesProvider: FC = ({ children }) => {
    const { authState } = useAuthContext();
    const params = useParams();

    const [filesListState, filesListDispatch] = useReducer(
        reducer,
        InitialState
    );

    const setLoading = () => {
        filesListDispatch({
            type: "loading",
        });
    };

    const setError = (error: any) => {
        console.log(error);
        filesListDispatch({
            type: "error",
        });
    };

    // useEffect(() => {

    // }, [filesListState]);

    const onGetFiles = async ({ fileID }: onGetFilesInterface) => {
        setLoading();
        const authorizationToken = authState.userData["token"];
        try {
            const respose = await getFiles({
                fileID,
                authorizationToken,
            });

            filesListDispatch({
                type: "loaded",
                payload: { filesList: respose },
            });
        } catch (error) {
            setError(error);
        }

        // if (authState.userType === "remote")
        // notesListDispatch({
        //     type: "loaded",
        //     payload: JSON.parse(localStorage.getItem("notes") || "{}"),
        // });
    };

    const onUpdateFile = async () => {
        filesListDispatch({ type: "loading" });
        filesListDispatch({ type: "loaded", payload: {} });
    };

    const onCreateFile = async (fileDetails: onCreateFilesInterface) => {
        filesListDispatch({ type: "loading" });
        const authorizationToken = authState.userData["token"];

        try {
            await createFile({
                body: fileDetails,
                authorizationToken,
            });

            if (onGetFiles != null && params.fileId === undefined)
                onGetFiles({ fileID: null });
            if (onGetFiles != null) onGetFiles({ fileID: params.fileId });

            // filesListDispatch({
            //     type: "loaded",
            //     payload: { filesList: respose },
            // });
        } catch (error) {
            setError(error);
        }
        // if (authState.userType === "remote") {
        // }
    };

    const onDeleteFile = async () => {
        filesListDispatch({ type: "loading" });

        if (authState.userType === "remote") {
        }
    };

    return (
        <FilesListContext.Provider
            value={{
                filesListState,
                onGetFiles,
                onCreateFile,
                onUpdateFile,
                onDeleteFile,
            }}
        >
            {children}
        </FilesListContext.Provider>
    );
};

export default FilesProvider;
