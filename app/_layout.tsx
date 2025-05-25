import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { APIKeyProvider } from '@/context/APIKeyContext';
import { DiagnosisProvider } from '@/context/DiagnosisContext';

export default function RootLayout() {
  useFrameworkReady();

  return (
    <ThemeProvider>
      <LanguageProvider>
        <APIKeyProvider>
          <DiagnosisProvider>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" />
              <Stack.Screen name="welcome" />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="auto" />
          </DiagnosisProvider>
        </APIKeyProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}