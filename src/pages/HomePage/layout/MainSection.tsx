import { useNoteContext } from "lib/providers/notes";
import { ChangeEvent, FC, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import TitleBar from "./TitleBar";

const MainSection: FC = () => {
    const { noteState, onUpdateNote } = useNoteContext();
    const [noteString, setNoteString] = useState<string>(noteState?.note?.data);

    useEffect(() => {
        setNoteString(noteState?.note?.data);
    }, [noteState]);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setNoteString(event.target.value);
    };

    const saveNote = () => {
        if (onUpdateNote !== null)
            onUpdateNote({
                ...noteState.note,
                id: noteState.note._id,
                data: noteString,
            });
    };

    console.log(noteState);

    return (
        <div className="flex flex-col h-full bg-gray-400 grow">
            <TitleBar fileName="Test File" save={saveNote} />
            {noteState?.note === null ? (
                <div className="w-full h-full bg-gray-200">
                    <p className="flex w-full h-full items-center justify-center text-3xl">
                        Not Note Selected
                    </p>
                </div>
            ) : (
                <div className="flex w-full h-full overflow-hidden ">
                    <div className="basis-1/2">
                        <textarea
                            className="w-full h-full p-2 bg-gray-200 resize-none scroll-smooth"
                            placeholder="Start Typing Note .."
                            value={noteString}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="border-l border-gray-300 basis-1/2">
                        <ReactMarkdown className="h-full min-w-full p-2 overflow-auto prose bg-gray-200 scroll-smooth">
                            {noteString}
                        </ReactMarkdown>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainSection;
