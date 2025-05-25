import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { Header } from '@/components/Header';
import { LanguageSelector } from '@/components/LanguageSelector';
import { COLORS } from '@/constants/Colors';

export default function LanguageSettingsScreen() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  const isDark = theme === 'dark';
  const backgroundColor = isDark ? '#1A1A1A' : COLORS.background;
  const cardBackground = isDark ? '#2A2A2A' : '#FFFFFF';
  
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Header title={t('languageSettings.title')} />
      
      <View style={[styles.card, { backgroundColor: cardBackground }]}>
        <LanguageSelector />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
});