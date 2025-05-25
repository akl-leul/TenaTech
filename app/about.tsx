import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, useColorScheme } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { COLORS } from '@/constants/Colors';
import { HomeHeader } from '@/components/HomeHeader';

export default function AboutScreen() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const isDark = theme === 'dark';
  const backgroundColor = isDark ? '#121212' : COLORS.background;
  const textColor = isDark ? '#E0E0E0' : COLORS.text;
  const cardBackground = isDark ? '#1E1E1E' : '#FFF';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <HomeHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Animated.View
          entering={FadeInDown.delay(200).duration(400)}
          style={[styles.card, { backgroundColor: cardBackground, shadowColor: isDark ? '#000' : '#888' }]}
        >
          <Text style={[styles.title, { color: textColor }]}>{t('about.title')}</Text>

          <Image
            source={{ uri: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800' }}
            style={styles.image}
            resizeMode="cover"
          />

          <Section title="" content={t('about.intro')} color={textColor} />
          <Section title={t('about.featuresTitle')} content={t('about.featuresContent')} color={textColor} />
          <Section title={t('about.languageSupportTitle')} content={t('about.languageSupportContent')} color={textColor} />
          <Section title={t('about.contactTitle')} content={t('about.contactContent')} color={textColor} />
        </Animated.View>
      </ScrollView>
    </View>
  );
}

function Section({ title, content, color }: { title: string; content: string; color: string }) {
  return (
    <View style={styles.section}>
      {title.length > 0 && <Text style={[styles.subtitle, { color }]}>{title}</Text>}
      <Text style={[styles.paragraph, { color }]}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 80,
  },
  card: {
    borderRadius: 16,
    padding: 24,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 24,
    letterSpacing: 0.5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginBottom: 28,
  },
  section: {
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
    letterSpacing: 0.3,
  },
  paragraph: {
    fontSize: 17,
    lineHeight: 28,
    fontWeight: '400',
  },
});
