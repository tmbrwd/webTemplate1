// LanguageContext.tsx

import { createContext, useState, useEffect } from 'react';

interface LanguageContextValue {
  language: string;
  changeLanguage: (newLanguage: string) => void;
  translate: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextValue>({
  language: 'mn', // Set the initial language to 'mn' (Mongolian)
  changeLanguage: () => {},
  translate: () => ''
});

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('mn'); // Set the initial language to 'mn' (Mongolian)
  const [translations, setTranslations] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // Load the translation file based on the selected language
    import(`../pages/api/${language}.json`)
      .then((translationModule) => {
        setTranslations(translationModule.default);
      })
      .catch((error) => {
        console.error(`Failed to load translations for language '${language}':`, error);
        setTranslations({});
      });
  }, [language]);

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  const translate = (key: string) => {
    return translations[key] || '';
  };

  const contextValue: LanguageContextValue = {
    language,
    changeLanguage,
    translate
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
