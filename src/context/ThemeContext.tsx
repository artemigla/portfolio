import React, { createContext, useState } from 'react';
import { Props } from '../types/types';

const ThemeContext = createContext<any>(false);

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

    const toggleTheme = () => {
      setDarkTheme((prevTheme) => !prevTheme);
    };

    return (
      <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
   );
};

export { ThemeProvider, ThemeContext };
