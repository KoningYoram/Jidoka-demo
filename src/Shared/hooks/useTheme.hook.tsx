import { useContext } from "react";
import { Theme } from "../interfaces/theme.interfaces";
import ThemeContext from "../theme.style";

function useTheme(): Theme{
    const theme = useContext(ThemeContext);
    return theme;
}

export default useTheme;