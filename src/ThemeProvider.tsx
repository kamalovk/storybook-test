import React, { createContext, useContext, ReactNode } from 'react';
import { theme } from './theme'; // Путь к вашему файлу с темой

const ThemeContext = createContext(theme);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);