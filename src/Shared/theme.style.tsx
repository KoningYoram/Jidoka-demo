import { createContext, CSSProperties } from "react";
import { Stylesheet } from "./interfaces/stylesheets.interface";
import { Theme } from "./interfaces/theme.interfaces";

export const defaultTheme: Theme = {
    colors: {
        primary: '#333',
        secondary: '#e3e3e3',
        error: 'red',
        success: 'green',
        background: '#EEE'
    },
    nav: {
        height: '10rem',
        maxHeight: '150px'
    },
    text: {
        defaultSize: '1.5rem',
        color: "black",
        activeColor: "black",
        secondaryColor: '#A7A7A7'
    }

};

const ThemeContext = createContext<Theme>(defaultTheme);
ThemeContext.displayName = "Theme";

export default ThemeContext;
