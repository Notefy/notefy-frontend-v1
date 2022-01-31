import { FC, useContext } from "react";
import { IconButton, Modal } from "component";
import { AddIcon, MenuIcon, SettingsIcon, UserIcon } from "assets/icons";
import { Theme, ThemeContext } from "config/theme";
import useModal from "lib/hook/useModal";
import AddFileModal from "./AddFileModal";
import AddFileDropdown from "./AddFileDropdown";

interface SideStripProps {
    toogleSideSection: () => void;
}

const SideStrip: FC<SideStripProps> = ({ toogleSideSection }) => {
    const { isShowing, toggle } = useModal();
    const {
        isShowing: addModalIsShowing,
        toggle: addModalToggle,
        close: addModalClose,
    } = useModal();
    const theme = useContext<Theme>(ThemeContext);
    const finalClassName = `flex flex-col items-center justify-between flex-none h-full pt-4 pb-6 ${theme?.primary?.[500]} w-14 drop-shadow z-20`;

    return (
        <div className={finalClassName}>
            {addModalIsShowing && (
                <Modal>
                    <AddFileModal
                        addModalClose={addModalClose}
                        title={""}
                        value={""}
                        setValue={undefined}
                        onSubmit={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                    />
                </Modal>
            )}
            {isShowing && <Modal children={<Modal />} />}
            <div className="flex flex-col justify-between">
                <IconButton icon={<MenuIcon />} onClick={toogleSideSection} />
                <AddFileDropdown />
                <IconButton icon={<AddIcon />} onClick={addModalToggle} />
                <IconButton icon={<SettingsIcon />} onClick={toggle} />
            </div>
            <IconButton
                icon={<UserIcon />}
                onClick={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        </div>
    );
};

export default SideStrip;
