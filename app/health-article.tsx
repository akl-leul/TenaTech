import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { Header } from '@/components/Header';
import { COLORS } from '@/constants/Colors';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function HealthArticleScreen() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  const isDark = theme === 'dark';
  const backgroundColor = isDark ? '#1A1A1A' : COLORS.background;
  const cardBackground = isDark ? '#2A2A2A' : '#FFFFFF';
  const textColor = isDark ? '#EFEFEF' : COLORS.text;
  
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Header title={t('healthArticle.title')} />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View entering={FadeInDown.delay(200).duration(500)}>
          <View style={[styles.card, { backgroundColor: cardBackground }]}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
              style={styles.image}
              resizeMode="cover"
            />
            
            <View style={styles.content}>
              <Text style={[styles.title, { color: textColor }]}>
                {t('healthArticle.title')}
              </Text>
              
              <Text style={[styles.date, { color: isDark ? '#AAAAAA' : '#666666' }]}>
                {t('healthArticle.date')}
              </Text>
              
              <Text style={[styles.paragraph, { color: isDark ? '#BBBBBB' : '#444444' }]}>
                {t('healthArticle.intro')}
              </Text>
              
              <Text style={[styles.subheading, { color: textColor }]}>
                {t('healthArticle.section1Title')}
              </Text>
              <Text style={[styles.paragraph, { color: isDark ? '#BBBBBB' : '#444444' }]}>
                {t('healthArticle.section1Content')}
              </Text>
              
              <Text style={[styles.subheading, { color: textColor }]}>
                {t('healthArticle.section2Title')}
              </Text>
              <Text style={[styles.paragraph, { color: isDark ? '#BBBBBB' : '#444444' }]}>
                {t('healthArticle.section2Content')}
              </Text>
              
              <Text style={[styles.subheading, { color: textColor }]}>
                {t('healthArticle.section3Title')}
              </Text>
              <Text style={[styles.paragraph, { color: isDark ? '#BBBBBB' : '#444444' }]}>
                {t('healthArticle.section3Content')}
              </Text>
              
              <Text style={[styles.conclusion, { color: isDark ? '#BBBBBB' : '#444444' }]}>
                {t('healthArticle.conclusion')}
              </Text>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 16,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  subheading: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 12,
  },
  conclusion: {
    fontSize: 16,
    lineHeight: 24,
    fontStyle: 'italic',
    marginTop: 16,
  },
});