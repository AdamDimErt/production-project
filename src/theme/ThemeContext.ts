import { createContext } from "react";

export enum Theme {
    NORMAL = "normal",
    DARK = "dark",
  }

  



  export interface ThemeContextProps{
    theme?:Theme,
    setTheme:(theme:any)=>void
  }
  export const ThemeContext = createContext<ThemeContextProps >({
    setTheme: function (theme: Theme): void {
      throw new Error("Function not implemented.");
    }
  })

  export const LOCAL_STORAGE_THEME_KEY = 'theme'