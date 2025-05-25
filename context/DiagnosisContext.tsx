import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface DiagnosisResult {
  id: string;
  date: string;
  condition: string;
  summary: string;
  recommendations: string[];
  confidence: number;
  symptoms: string;
  diet: string;
  location: string;
}

interface DiagnosisContextType {
  diagnosisHistory: DiagnosisResult[];
  addDiagnosis: (diagnosis: DiagnosisResult) => void;
  getDiagnosisById: (id: string) => DiagnosisResult | undefined;
  clearHistory: () => void;
}

const DiagnosisContext = createContext<DiagnosisContextType>({
  diagnosisHistory: [],
  addDiagnosis: () => {},
  getDiagnosisById: () => undefined,
  clearHistory: () => {},
});

export const useDiagnosis = () => useContext(DiagnosisContext);

export const DiagnosisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [diagnosisHistory, setDiagnosisHistory] = useState<DiagnosisResult[]>([]);
  
  useEffect(() => {
    // Load saved diagnosis history from storage
    const loadHistory = async () => {
      try {
        const savedHistory = await AsyncStorage.getItem('diagnosisHistory');
        if (savedHistory) {
          setDiagnosisHistory(JSON.parse(savedHistory));
        }
      } catch (error) {
        console.error('Failed to load diagnosis history:', error);
      }
    };
    
    loadHistory();
  }, []);
  
  const saveHistory = async (history: DiagnosisResult[]) => {
    try {
      await AsyncStorage.setItem('diagnosisHistory', JSON.stringify(history));
    } catch (error) {
      console.error('Failed to save diagnosis history:', error);
    }
  };
  
  const addDiagnosis = (diagnosis: DiagnosisResult) => {
    const updatedHistory = [diagnosis, ...diagnosisHistory];
    setDiagnosisHistory(updatedHistory);
    saveHistory(updatedHistory);
  };
  
  const getDiagnosisById = (id: string) => {
    return diagnosisHistory.find(diagnosis => diagnosis.id === id);
  };
  
  const clearHistory = () => {
    setDiagnosisHistory([]);
    saveHistory([]);
  };
  
  return (
    <DiagnosisContext.Provider value={{ 
      diagnosisHistory, 
      addDiagnosis, 
      getDiagnosisById,
      clearHistory 
    }}>
      {children}
    </DiagnosisContext.Provider>
  );
};