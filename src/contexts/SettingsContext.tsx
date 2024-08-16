import React, { createContext, useState, useEffect, useContext } from 'react';
import styles from 'style/App.module.scss';

export type themeOptions = 'light' | 'dark';

interface SettingsProviderProps {
  children: React.ReactNode;
}

interface SettingsContextProps {
  theme: themeOptions;
  setTheme: (theme: themeOptions) => void;
}

const SettingsContext = createContext({} as SettingsContextProps);

export const UseSettings = () => useContext(SettingsContext);

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [theme, setTheme] = useState<themeOptions>('light');

  useEffect(() => {
    document.querySelector('#root')?.classList.add(styles[theme]);
  }, [theme]);

  return <SettingsContext.Provider value={{ theme, setTheme }}>{children}</SettingsContext.Provider>;
}
