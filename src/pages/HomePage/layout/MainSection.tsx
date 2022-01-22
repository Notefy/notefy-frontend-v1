import { ChangeEvent, FC, useState } from "react";
import ReactMarkdown from "react-markdown";
import TitleBar from "./TitleBar";

const MainSection: FC = () => {
    const [noteString, getNoteString] = useState<string>(
        "# Hello \n\n *How are you*"
    );

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        getNoteString(event.target.value);
    };

    return (
        <div className="flex flex-col h-full bg-gray-400 grow">
            <TitleBar fileName="Test File" />
            <div className="flex w-full h-full overflow-hidden ">
                <div className="basis-1/2">
                    <textarea
                        className="w-full h-full p-2 bg-gray-200 "
                        placeholder="Start Typing Note .."
                        value={noteString}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="border-l border-gray-300 basis-1/2">
                    <ReactMarkdown className="h-full min-w-full p-2 overflow-auto prose bg-gray-200 ">
                        {noteString}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default MainSection;
