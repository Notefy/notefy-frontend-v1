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
        <div className="grow flex flex-col bg-gray-600 h-full">
            <ToolBar />
            <div className="flex h-full w-full overflow-hidden">
                <div className="basis-1/2 p-4">
                    <textarea
                        className="p-2 bg-gray-500 rounded h-full w-full"
                        placeholder="Start Typing Note .."
                        value={noteString}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="basis-1/2 p-4">
                    <div className="p-2 prose prose-invert bg-gray-500 rounded h-full w-full overflow-auto">
                        <ReactMarkdown>{noteString}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;
