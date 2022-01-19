export interface Theme {
    primary?: {
        main?: string,
        text?: string
    },
    secondary?: {
        main?: string,
        text?: string,
    },
    icon?: {
        color?: string,
        height?: string,
        width?: string
    }
}
export const defaultTheme: Theme = {
    primary: {
        main: "",
        text: ""
    },
    secondary: {
        main: "",
        text: "",
    },
    icon: {
        color: "text-gray-500",
        height: "h-10",
        width: "w-10"
    }
};


