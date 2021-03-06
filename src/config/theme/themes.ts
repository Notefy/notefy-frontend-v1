import { Theme } from "./theme.interface";

export const defaultLightTheme: Theme = {
    mode: "light",
    greys: {
        // 50: "bg-gray-50",
        100: "bg-gray-100",
        200: "bg-gray-200",
        300: "bg-gray-300",
        400: "bg-gray-400",
        500: "bg-gray-500",
        600: "bg-gray-600",
        700: "bg-gray-700",
        800: "bg-gray-800",
        // 900: "bg-gray-900",
    },
    primary: {
        // 50: "",
        100: "bg-purple-100",
        200: "bg-purple-200",
        300: "bg-purple-300",
        400: "bg-purple-400",
        500: "bg-purple-500",
        600: "bg-purple-600",
        700: "bg-purple-700",
        800: "bg-purple-800",
        // 900: "bg-purple-900",
        text: "",
    },
    secondary: {
        // 50: "",
        100: "",
        200: "",
        300: "",
        400: "",
        500: "",
        600: "",
        700: "",
        800: "",
        // 900: "",
        text: "",
    },
    icon: {
        color: "text-gray-800",
        height: "h-10",
        width: "w-10",
    },
};

export const defaultDarkTheme: Theme = {
    mode: "dark",
    primary: {
        500: "",
        700: "",
        300: "",
        text: "",
    },
    secondary: {
        500: "",
        700: "",
        300: "",
        text: "",
    },
    icon: {
        color: "text-gray-500",
        height: "h-10",
        width: "w-10",
    },
};
