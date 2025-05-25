import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface APIKeyContextType {
  apiKey: string | null;
  setAPIKey: (key: string) => void;
  clearAPIKey: () => void;
}

const APIKeyContext = createContext<APIKeyContextType>({
  apiKey: null,
  setAPIKey: () => {},
  clearAPIKey: () => {},
});

export const useAPIKey = () => useContext(APIKeyContext);

export const APIKeyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [apiKey, setApiKeyState] = useState<string | null>(null);
  
  useEffect(() => {
    // Load saved API key from storage
    const loadAPIKey = async () => {
      try {
        const savedKey = await AsyncStorage.getItem('apiKey');
        if (savedKey) {
          setApiKeyState(savedKey);
        }
      } catch (error) {
        console.error('Failed to load API key:', error);
      }
    };
    
    loadAPIKey();
  }, []);
  
  const setAPIKey = async (key: string) => {
    try {
      await AsyncStorage.setItem('apiKey', key);
      setApiKeyState(key);
    } catch (error) {
      console.error('Failed to save API key:', error);
    }
  };
  
  const clearAPIKey = async () => {
    try {
      await AsyncStorage.removeItem('apiKey');
      setApiKeyState(null);
    } catch (error) {
      console.error('Failed to clear API key:', error);
    }
  };
  
  return (
    <APIKeyContext.Provider value={{ apiKey, setAPIKey, clearAPIKey }}>
      {children}
    </APIKeyContext.Provider>
  );
};