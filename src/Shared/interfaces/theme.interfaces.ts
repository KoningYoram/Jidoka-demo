import { CSSProperties } from "react";

export enum sizes {
    "SM" = "468px",
    "MD" = " 768px",
    "LG" = "992px"
}

export interface Theme {
    colors: {
        primary: CSSProperties['color'],
        secondary: CSSProperties['color'],
        error: CSSProperties['color'],
        success: CSSProperties['color'],
        background: CSSProperties['color']
    },
    nav: {
        height: CSSProperties['height'],
        maxHeight: CSSProperties['maxHeight']
    },
    text: {
        defaultSize:  CSSProperties['fontSize'];
        color: CSSProperties['color'],
        activeColor: CSSProperties['color'],
        secondaryColor: CSSProperties['color']
    }
}