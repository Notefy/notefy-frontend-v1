import { createContext, FC, useContext, useReducer, useState } from "react";
import { useAuthContext } from "../auth";
import { onUpdateNoteInterface } from "../filesList/FilesConstants";
import { getFiles, updateFiles } from "../filesList/FilesUtility";
import { NoteState, onGetNoteInterface } from "./NoteConstant";
import { reducer } from "./NoteReducer";

export const InitialState: NoteState = {
    isLoading: false,
    isError: false,
    note: null,
};

export interface NoteContextInterface {
    noteState: NoteState;
    onGetNote: ((v: onGetNoteInterface) => void) | null;
    onUpdateNote: ((v: onUpdateNoteInterface & { id: string }) => void) | null;
    onDeleteNote: (() => void) | null;
}

export const NoteContext = createContext<NoteContextInterface>({
    noteState: InitialState,
    onGetNote: null,
    onUpdateNote: null,
    onDeleteNote: null,
});

export const useNoteContext = () => {
    return useContext(NoteContext);
};

const NoteProvider: FC = ({ children }) => {
    const { authState } = useAuthContext();
    const [noteState, noteDispatch] = useReducer(reducer, InitialState);

    const setLoading = () => {
        noteDispatch({
            type: "loading",
        });
    };

    const setError = (error: any) => {
        console.log(error);
        noteDispatch({
            type: "error",
        });
    };

    const onGetNote = async ({ fileID }: onGetNoteInterface) => {
        setLoading();
        const authorizationToken = authState.userData["token"];
        try {
            const respose = await getFiles({
                fileID,
                authorizationToken,
            });

            noteDispatch({
                type: "loaded",
                payload: { note: respose.note },
            });
        } catch (error) {
            setError(error);
        }
    };

    const onUpdateNote = async ({
        id,
        title,
        data,
        path,
        color,
        tags,
    }: onUpdateNoteInterface & { id: string }) => {
        setLoading();
        const authorizationToken = authState.userData["token"];

        try {
            const respose = await updateFiles({
                fileID: id,
                body: { title, data, path, color, tags },
                authorizationToken,
            });

            if (onGetNote != null) onGetNote({ fileID: id });

            // noteDispatch({
            //     type: "loaded",
            //     payload: { note: respose.note },
            // });
        } catch (error) {
            setError(error);
        }
    };

    const onDeleteNote = () => {};

    return (
        <NoteContext.Provider
            value={{
                noteState,
                onGetNote,
                onUpdateNote,
                onDeleteNote,
            }}
        >
            {children}
        </NoteContext.Provider>
    );
};

export default NoteProvider;
