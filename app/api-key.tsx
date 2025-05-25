import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { useAPIKey } from '@/context/APIKeyContext';
import { Header } from '@/components/Header';
import { COLORS } from '@/constants/Colors';
import { Key } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function APIKeyScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const { t } = useLanguage();
  const { apiKey, setAPIKey } = useAPIKey();
  
  const [key, setKey] = useState(apiKey || '');
  const [error, setError] = useState<string | null>(null);
  
  const isDark = theme === 'dark';
  const backgroundColor = isDark ? '#1A1A1A' : COLORS.background;
  const cardBackground = isDark ? '#2A2A2A' : '#FFFFFF';
  const textColor = isDark ? '#EFEFEF' : COLORS.text;
  
  const handleSave = async () => {
    if (!key.trim()) {
      setError(t('apiKey.errorEmpty'));
      return;
    }
    
    try {
      await setAPIKey(key.trim());
      router.back();
    } catch (err) {
      setError(t('apiKey.errorSaving'));
    }
  };
  
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Header title={t('apiKey.title')} />
      
      <Animated.View 
        entering={FadeInDown.delay(200).duration(500)}
        style={styles.content}
      >
        <View style={[styles.card, { backgroundColor: cardBackground }]}>
          <View style={styles.iconContainer}>
            <Key size={32} color={COLORS.primary} />
          </View>
          
          <Text style={[styles.description, { color: textColor }]}>
            {t('apiKey.description')}
          </Text>
          
          <TextInput
            style={[
              styles.input,
              { 
                color: textColor,
                backgroundColor: isDark ? '#333333' : '#F9F9F9',
                borderColor: isDark ? '#444444' : '#E0E0E0'
              }
            ]}
            value={key}
            onChangeText={(text) => {
              setKey(text);
              setError(null);
            }}
            placeholder={t('apiKey.placeholder')}
            placeholderTextColor={isDark ? '#777777' : '#999999'}
            autoCapitalize="none"
            autoCorrect={false}
          />
          
          {error && (
            <Text style={styles.errorText}>{error}</Text>
          )}
          
          <TouchableOpacity
            style={[
              styles.button,
              { opacity: key.trim() ? 1 : 0.7 }
            ]}
            onPress={handleSave}
            disabled={!key.trim()}
          >
            <Text style={styles.buttonText}>
              {t('apiKey.save')}
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(60, 110, 113, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    color: '#E53935',
    fontSize: 14,
    marginBottom: 16,
  },
});