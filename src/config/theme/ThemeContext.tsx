import React, { createContext, FC } from "react";
import { defaultTheme, Theme } from "./theme";

type ThemeContextProviderProps = { theme?: Theme; children: React.ReactNode };

export const ThemeContext = createContext<Theme>(defaultTheme);

const ThemeContextProvider: FC<ThemeContextProviderProps> = ({
    theme,
    children,
}: ThemeContextProviderProps) => {
    return (
        <ThemeContext.Provider value={theme || defaultTheme}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
