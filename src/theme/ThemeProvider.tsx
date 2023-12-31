/** @format */

import React, { FC, useMemo, useState } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "./ThemeContext";

const defaultTheme =
  (localStorage.getItem(
    LOCAL_STORAGE_THEME_KEY,
  ) as Theme) || Theme.NORMAL;

export const ThemeProvider: any = ({ children }: any) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.NORMAL
        ? Theme.DARK
        : Theme.NORMAL,
    );
  };

  const defaultProps = useMemo(
    () => ({ theme: theme, setTheme: setTheme }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
