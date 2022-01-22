import { FC } from "react";
import { ThemeContextProvider } from "config/theme";
import HomePage from "pages/HomePage";
import AppStores from "config/store/AppStores";

const App: FC = () => {
    return (
        <div className="">
            <AppStores>
                <ThemeContextProvider>
                    <HomePage />
                </ThemeContextProvider>
            </AppStores>
        </div>
    );
};

export default App;
