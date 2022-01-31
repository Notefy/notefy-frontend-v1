export interface NoteState {
    isLoading: boolean;
    isError: boolean;
    note: any | null;
}

interface BaseNoteState {
    type: "loading" | "error";
}

interface CustomFilesListState {
    type: "loaded" | "updating";
    payload: Partial<NoteState>;
}

export type NoteAction = BaseNoteState | CustomFilesListState;

export interface onGetNoteInterface {
    fileID?: string | null;
}

export interface noteInterface {
    type: "note";
    title: string;
    data: string;
    path: "";
    tags: string[];
    color: string;
    createdBy: string;
    _id: string;
    createdAt: string;
}
