import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { Header } from '@/components/Header';
import { COLORS } from '@/constants/Colors';
import { Heart, Brain, Sun, Moon, Utensils, Activity } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function HealthTipsScreen() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  const isDark = theme === 'dark';
  const backgroundColor = isDark ? '#1A1A1A' : COLORS.background;
  const cardBackground = isDark ? '#2A2A2A' : '#FFFFFF';
  const textColor = isDark ? '#EFEFEF' : COLORS.text;
  
  const tips = [
    {
      icon: <Heart size={24} color={COLORS.primary} />,
      title: t('healthTips.cardio.title'),
      description: t('healthTips.cardio.description'),
    },
    {
      icon: <Brain size={24} color={COLORS.accent} />,
      title: t('healthTips.mental.title'),
      description: t('healthTips.mental.description'),
    },
    {
      icon: <Sun size={24} color={COLORS.secondary} />,
      title: t('healthTips.vitamin.title'),
      description: t('healthTips.vitamin.description'),
    },
    {
      icon: <Moon size={24} color={COLORS.primary} />,
      title: t('healthTips.sleep.title'),
      description: t('healthTips.sleep.description'),
    },
    {
      icon: <Utensils size={24} color={COLORS.accent} />,
      title: t('healthTips.nutrition.title'),
      description: t('healthTips.nutrition.description'),
    },
    {
      icon: <Activity size={24} color={COLORS.secondary} />,
      title: t('healthTips.exercise.title'),
      description: t('healthTips.exercise.description'),
    },
  ];
  
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Header title={t('healthTips.title')} />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View entering={FadeInDown.delay(200).duration(500)}>
          <Text style={[styles.subtitle, { color: textColor }]}>
            {t('healthTips.subtitle')}
          </Text>
          
          {tips.map((tip, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.card, { backgroundColor: cardBackground }]}
            >
              <View style={styles.iconContainer}>
                {tip.icon}
              </View>
              <View style={styles.content}>
                <Text style={[styles.tipTitle, { color: textColor }]}>
                  {tip.title}
                </Text>
                <Text style={[styles.description, { color: isDark ? '#BBBBBB' : '#444444' }]}>
                  {tip.description}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
          
          <Text style={[styles.disclaimer, { color: isDark ? '#777777' : '#999999' }]}>
            {t('healthTips.disclaimer')}
          </Text>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(60, 110, 113, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
  disclaimer: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 40,
    paddingHorizontal: 24,
  },
});