import { FC } from "react";
import MainSection from "./layout/MainSection";
import SideSection from "./layout/SideSection";
import SideStrip from "./layout/SideStrip";

const HomePage: FC = () => {
    return (
        <div className="flex h-screen">
            <SideStrip />
            <SideSection />
            <MainSection />
        </div>
    );
};

export default HomePage;
