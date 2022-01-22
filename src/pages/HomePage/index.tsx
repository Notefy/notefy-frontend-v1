// import { Modal } from "component";
import { useState, FC } from "react";
import MainSection from "./layout/MainSection";
import SideSection from "./layout/SideSection";
import SideStrip from "./layout/SideStrip";

const HomePage: FC = () => {
    const [isSideSectionOpen, setIsSideSectionOpen] = useState(true);

    const toogleSideSection = () => {
        setIsSideSectionOpen(!isSideSectionOpen);
    };

    return (
        <div className="flex h-screen">
            <SideStrip toogleSideSection={toogleSideSection} />
            {isSideSectionOpen && <SideSection />}
            <MainSection />
            {/* <Modal title="Modal"/> */}
        </div>
    );
};

export default HomePage;
