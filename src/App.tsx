import { FC } from "react";
import { ThemeContextProvider } from "config/theme";
import HomePage from "./pages/HomePage/HomePage";

const App: FC = () => {
    return (
        <div className="text-white">
            <ThemeContextProvider>
                <HomePage />
            </ThemeContextProvider>
        </div>
    );
};

export default App;
