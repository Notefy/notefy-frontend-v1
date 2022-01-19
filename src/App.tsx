import { FC } from "react";
import { ThemeContextProvider } from "config/theme";
import HomePage from "pages/HomePage/HomePage";
import AppStores from "config/store/AppStores";

const App: FC = () => {
    return (
        <div className="text-white">
            <AppStores>
                <ThemeContextProvider>
                    <HomePage />
                </ThemeContextProvider>
            </AppStores>
        </div>
    );
};

export default App;
