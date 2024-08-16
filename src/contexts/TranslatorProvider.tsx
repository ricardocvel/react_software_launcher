import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

import en from 'shared/language/en';
import pt from 'shared/language/pt-br';
import es from 'shared/language/es';

export type Language = 'pt-br' | 'en' | 'es';

interface TranslatorProviderProps {
  children: React.ReactNode;
}

export type LanguageType = typeof pt;

interface TranslateContextProps {
  setLang: (lang: Language) => void;
  lang: Language;
  getTranslation: (a: keyof typeof pt) => string;
  translate: typeof pt | typeof en;
}

const TranslateContext = createContext({} as TranslateContextProps);

export const UseTranslate = () => useContext(TranslateContext);

export function TranslatorProvider({ children }: TranslatorProviderProps) {
  const handleTypeLanguage = useCallback((opt: Language) => {
    switch (opt) {
      case 'pt-br':
        return pt;
      case 'en':
        return en;
      case 'es':
        return es;
      default:
        return pt;
    }
  }, []);

  const [lang, setLang] = useState<Language>('pt-br');

  const translate = useMemo(() => handleTypeLanguage(lang), [lang]);

  const getTranslation = useCallback(
    (a: keyof typeof pt) => {
      return translate[a];
    },
    [translate]
  );

  return (
    <TranslateContext.Provider value={{ setLang, getTranslation, lang, translate }}>
      {children}
    </TranslateContext.Provider>
  );
}
