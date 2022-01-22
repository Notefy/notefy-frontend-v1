import { useContext, FC } from "react";
import { ThemeContext } from "config/theme/ThemeContext";
import { Theme } from "config/theme/theme.interface";

interface ModalProps {
    title: string;
    onClick?: () => void;
    backgroundColor?: string;
    hoverText?: string;
    hoverColor?: string;
    children?: React.ReactNode;
    direction?: string;
    className?: string;
}

const Modal: FC<ModalProps> = ({ title, onClick, className }) => {
    return (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full text-black modal">
            <div className="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"></div>

            <div className="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md">
                {/* <!-- Add margin if you want to see some of the overlay behind the modal--> */}
                <div className="px-6 py-4 text-left modal-content">
                    {/* <!--Title--> */}
                    <div className="flex items-center justify-between pb-3">
                        <p className="text-2xl font-bold">{title}</p>
                    </div>

                    {/* <!--Footer--> */}
                    <div className="flex justify-end pt-2">
                        <button className="p-3 px-4 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400">
                            Action
                        </button>
                        <button className="p-3 px-4 text-white bg-indigo-500 rounded-lg modal-close hover:bg-indigo-400">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
