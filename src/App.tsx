import { FC } from "react";
import { ThemeContextProvider } from "config/theme";
import AppStores from "config/store/AppStores"
import AppRouter from "config/routes/Router";

const App: FC = () => {
    return (
        <div className="">
            <AppStores>
                <ThemeContextProvider>
                    <AppRouter />
                </ThemeContextProvider>
            </AppStores>
        </div>
    );
};

export default App;
