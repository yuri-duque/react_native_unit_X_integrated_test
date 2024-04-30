import React, { useState, createContext, useContext } from "react";
import { DarkTheme, LigthTheme, Sizes, Spacings } from "../theme";
import { ColorsType, ThemeType } from "../theme/types";

type ThemeContextType = {
  getTheme: () => ThemeType;
  changeTheme: () => void;
};

const defaultThemeContext: ThemeContextType = {
  getTheme: (): ThemeType => {
    return {
      colors: DarkTheme,
      sizes: Sizes,
      spacings: Spacings,
    };
  },
  changeTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

const ThemeProvider = ({ children }: any) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const getTheme = () => {
    let colors: ColorsType;
    if (isDark) colors = DarkTheme;
    else colors = LigthTheme;

    const theme: ThemeType = {
      colors,
      sizes: Sizes,
      spacings: Spacings,
    };

    return theme;
  };

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ getTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const { getTheme } = useContext(ThemeContext);
  return getTheme();
};

export { ThemeProvider, ThemeContext, useTheme };
