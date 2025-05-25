import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react-native';
import { COLORS } from '@/constants/Colors';

interface LanguageSelectorProps {
  compact?: boolean;
}

export function LanguageSelector({ compact = false }: LanguageSelectorProps) {
  const { theme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();
  
  const isDark = theme === 'dark';
  const backgroundColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
  const textColor = isDark ? '#FFFFFF' : COLORS.text;
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'am', name: 'አማርኛ' },
    { code: 'om', name: 'Afaan Oromoo' },
    { code: 'so', name: 'Soomaali' },
    { code: 'ar', name: 'العربية' },
    { code: 'fr', name: 'Français' },
    { code: 'ti', name: 'ትግርኛ' }
  ];
  
  const currentLanguage = languages.find(lang => lang.code === language);
  
  if (compact) {
    return (
      <TouchableOpacity 
        style={[styles.compactContainer, { backgroundColor }]}
        onPress={() => {
          // Cycle through languages
          const currentIndex = languages.findIndex(lang => lang.code === language);
          const nextIndex = (currentIndex + 1) % languages.length;
          changeLanguage(languages[nextIndex].code as any);
        }}
      >
        <Globe size={16} color={textColor} />
        <Text style={[styles.compactText, { color: textColor }]}>
          {currentLanguage?.code.toUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  }
  
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: textColor }]}>
        {t('languageSelector.title')}
      </Text>
      
      <View style={styles.languageGrid}>
        {languages.map((lang) => (
          <TouchableOpacity
            key={lang.code}
            style={[
              styles.languageButton,
              language === lang.code && styles.selectedLanguage,
              { borderColor: COLORS.primary }
            ]}
            onPress={() => changeLanguage(lang.code as any)}
          >
            <Text
              style={[
                styles.languageText,
                language === lang.code && styles.selectedLanguageText,
                { color: language === lang.code ? COLORS.primary : textColor }
              ]}
            >
              {lang.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  languageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  languageButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 12,
    marginBottom: 12,
  },
  selectedLanguage: {
    backgroundColor: 'rgba(60, 110, 113, 0.1)',
  },
  languageText: {
    fontSize: 14,
  },
  selectedLanguageText: {
    fontWeight: '600',
  },
  compactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
  },
  compactText: {
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
});