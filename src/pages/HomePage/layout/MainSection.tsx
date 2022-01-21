import { ChangeEvent, FC, useState } from "react";
import ReactMarkdown from "react-markdown";
import ToolBar from "./ToolBar";

const MainSection: FC = () => {
    const [noteString, getNoteString] = useState<string>(
        "# Hello \n\n *How are you*"
    );

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        getNoteString(event.target.value);
    };

    return (
        <div className="flex flex-col h-full bg-gray-600 grow">
            <ToolBar />
            <div className="flex w-full h-full overflow-hidden">
                <div className="p-4 basis-1/2">
                    <textarea
                        className="w-full h-full p-2 bg-gray-500 rounded"
                        placeholder="Start Typing Note .."
                        value={noteString}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="p-4 basis-1/2">
                    <div className="w-full h-full p-2 overflow-auto prose bg-gray-500 rounded prose-invert">
                        <ReactMarkdown>{noteString}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;
