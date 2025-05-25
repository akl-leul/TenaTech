import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { COLORS } from '@/constants/Colors';
import { CirclePlus as PlusCircle } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function StatusCard() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  const isDark = theme === 'dark';
  
  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.secondary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.title}>
            {t('statusCard.title')}
          </Text>
          <Text style={styles.description}>
            {t('statusCard.description')}
          </Text>
        </View>
        
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContent}>
            <PlusCircle size={16} color={COLORS.primary} />
            <Text style={[styles.buttonText, { color: COLORS.primary }]}>
              {t('statusCard.button')}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  contentContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    maxWidth: '80%',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
  },
});