import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");
interface ModalProps {
    backgroundColor?: string;
    hoverText?: string;
    hoverColor?: string;
    direction?: string;
    className?: string;
    children?: React.ReactNode;
}

const Modal = ({ children }: ModalProps): JSX.Element => {
    if (modalRoot === null) {
        console.log("'modal-root' element id not found");
        return <></>;
    } else
        return ReactDOM.createPortal(
            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full text-black modal z-40">
                <div className="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"></div>

                <div className="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md">
                    {/* <!-- Add margin if you want to see some of the overlay behind the modal--> */}
                    <div className="px-6 py-4 text-left modal-content bg-gray-100">
                        {children}
                    </div>
                </div>
            </div>,
            modalRoot
        );
};

export default Modal;
