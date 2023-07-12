import { useContext } from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext"

interface UseThemeResult{
    toggleTheme:()=>void
    theme:Theme
}


export function useTheme(){
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
          setTheme((currentTheme: any) =>
              currentTheme === Theme.NORMAL
                  ? Theme.DARK
                  : Theme.NORMAL);

    };

    return {theme,toggleTheme}
}

