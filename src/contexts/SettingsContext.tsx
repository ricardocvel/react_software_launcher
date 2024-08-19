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

  const _setTheme = (_theme: themeOptions) => {
    console.log('Theme: ' + _theme + ' theme_old: ' + theme);
    document.querySelector('#root')?.classList.toggle(styles[theme]);
    setTheme(_theme);
  };

  useEffect(() => {
    console.log('theme_new: ' + theme);

    document.querySelector('#root')?.classList.add(styles[theme]);
  }, [theme]);

  return <SettingsContext.Provider value={{ theme, setTheme: _setTheme }}>{children}</SettingsContext.Provider>;
}
