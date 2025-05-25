import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18n } from '@/utils/i18n';

type LanguageCode = 'en' | 'am' | 'om' | 'so' | 'ar' | 'fr' | 'ti';

interface LanguageContextType {
  language: LanguageCode;
  changeLanguage: (code: LanguageCode) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const defaultLanguage: LanguageCode = 'en';

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  changeLanguage: () => {},
  t: (key) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageCode>(defaultLanguage);
  const [i18n] = useState(new I18n());
  
  useEffect(() => {
    // Load saved language from storage
    const loadLanguage = async () => {
      try {
        const savedLanguage = await AsyncStorage.getItem('language');
        if (savedLanguage) {
          setLanguage(savedLanguage as LanguageCode);
        }
      } catch (error) {
        console.error('Failed to load language:', error);
      }
    };
    
    loadLanguage();
  }, []);
  
  const changeLanguage = async (code: LanguageCode) => {
    try {
      await AsyncStorage.setItem('language', code);
      setLanguage(code);
    } catch (error) {
      console.error('Failed to save language:', error);
    }
  };
  
  const t = (key: string, params?: Record<string, string | number>): string => {
    return i18n.translate(key, language, params);
  };
  
  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};