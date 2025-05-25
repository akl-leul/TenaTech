import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function HelpSupportScreen() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const isDark = theme === 'dark';
  const backgroundColor = isDark ? '#1A1A1A' : '#F5F5F5';
  const textColor = isDark ? '#EFEFEF' : '#222222';
  const cardBackground = isDark ? '#2A2A2A' : '#FFFFFF';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ScrollView
        contentContainerStyle={{ padding: 16, paddingTop: 60 }}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View entering={FadeInDown.duration(600)}>
          <Text style={[styles.title, { color: textColor }]}>
            {t('support.title')}
          </Text>

          <View style={[styles.card, { backgroundColor: cardBackground }]}>
            <Text style={[styles.paragraph, { color: textColor }]}>
              {t('support.intro')}
            </Text>

            <Text style={[styles.sectionTitle, { color: textColor, marginTop: 20 }]}>
              {t('support.faqTitle')}
            </Text>
            <Text style={[styles.paragraph, { color: textColor }]}>
              {t('support.faqContent')}
            </Text>

            <Text style={[styles.sectionTitle, { color: textColor, marginTop: 20 }]}>
              {t('support.contactTitle')}
            </Text>
            <Text style={[styles.paragraph, { color: textColor }]}>
              {t('support.contactContent')}
            </Text>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
  },
  card: {
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
});
