import { TextInput } from "component";
import {
    fileTypeInterface,
    useFilesListContext,
} from "lib/providers/filesList";
import {
    onCreateFolderInterface,
    onCreateNoteInterface,
} from "lib/providers/filesList/FilesConstants";
import { useState } from "react";

export interface CreateModalProps {
    title: string;
    value: string;
    setValue: ((e: React.SetStateAction<string>) => void) | undefined;
    addModalClose: () => void;
    onSubmit: () => void;
}

const AddFileModal = ({
    title,
    value,
    setValue,
    addModalClose,
    onSubmit,
}: CreateModalProps) => {
    const actionButtonClassName = `mx-2 p-2 px-2 text-white bg-indigo-500 rounded-lg modal-close hover:bg-indigo-400`;

    return (
        <>
            <div className="flex items-center pb-3">
                <p className="text-2xl font-bold">New {title}</p>
            </div>

            {
                <div className="mt-4">
                    <TextInput
                        id="title-input"
                        name="title"
                        placeholder="title"
                        value={value}
                        setValue={setValue}
                    />
                </div>
            }
            <div className="flex justify-end pt-2 mt-4">
                {value !== "" && (
                    <button
                        className={actionButtonClassName}
                        onClick={onSubmit}
                    >
                        Create {title}
                    </button>
                )}

                <button
                    className={actionButtonClassName}
                    onClick={addModalClose}
                >
                    Close
                </button>
            </div>
        </>
    );
};

export default AddFileModal;
