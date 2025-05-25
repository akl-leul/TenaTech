import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { useDiagnosis } from '@/context/DiagnosisContext';
import { Header } from '@/components/Header';
import { COLORS } from '@/constants/Colors';
import { TriangleAlert as AlertTriangle, CircleCheck as CheckCircle2, MapPin, Utensils } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function DiagnosisDetailsScreen() {
  const { id } = useLocalSearchParams();
  const { theme } = useTheme();
  const { t } = useLanguage();
  const { getDiagnosisById } = useDiagnosis();
  
  const diagnosis = getDiagnosisById(id as string);
  
  const isDark = theme === 'dark';
  const backgroundColor = isDark ? '#1A1A1A' : COLORS.background;
  const cardBackground = isDark ? '#2A2A2A' : '#FFFFFF';
  const textColor = isDark ? '#EFEFEF' : COLORS.text;
  
  if (!diagnosis) {
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <Header title={t('diagnosisDetails.title')} />
        <View style={styles.errorContainer}>
          <Text style={[styles.errorText, { color: textColor }]}>
            {t('diagnosisDetails.notFound')}
          </Text>
        </View>
      </View>
    );
  }
  
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Header title={t('diagnosisDetails.title')} />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View entering={FadeInDown.delay(200).duration(500)}>
          <View style={[styles.card, { backgroundColor: cardBackground }]}>
            <View style={styles.header}>
              <Text style={[styles.date, { color: isDark ? '#AAAAAA' : '#666666' }]}>
                {new Date(diagnosis.date).toLocaleDateString()}
              </Text>
              <View style={[
                styles.confidenceTag,
                { backgroundColor: diagnosis.confidence > 0.7 ? '#4CAF50' : '#FFC107' }
              ]}>
                <Text style={styles.confidenceText}>
                  {Math.round(diagnosis.confidence * 100)}% {t('diagnosisDetails.confidence')}
                </Text>
              </View>
            </View>
            
            <Text style={[styles.condition, { color: textColor }]}>
              {diagnosis.condition}
            </Text>
            
            <Text style={[styles.summary, { color: isDark ? '#BBBBBB' : '#444444' }]}>
              {diagnosis.summary}
            </Text>
            
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <AlertTriangle size={20} color={COLORS.accent} />
                <Text style={[styles.sectionTitle, { color: textColor }]}>
                  {t('diagnosisDetails.symptoms')}
                </Text>
              </View>
              <Text style={[styles.sectionText, { color: isDark ? '#BBBBBB' : '#444444' }]}>
                {diagnosis.symptoms}
              </Text>
            </View>
            
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Utensils size={20} color={COLORS.primary} />
                <Text style={[styles.sectionTitle, { color: textColor }]}>
                  {t('diagnosisDetails.diet')}
                </Text>
              </View>
              <Text style={[styles.sectionText, { color: isDark ? '#BBBBBB' : '#444444' }]}>
                {diagnosis.diet}
              </Text>
            </View>
            
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <MapPin size={20} color={COLORS.secondary} />
                <Text style={[styles.sectionTitle, { color: textColor }]}>
                  {t('diagnosisDetails.location')}
                </Text>
              </View>
              <Text style={[styles.sectionText, { color: isDark ? '#BBBBBB' : '#444444' }]}>
                {diagnosis.location}
              </Text>
            </View>
            
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <CheckCircle2 size={20} color={COLORS.primary} />
                <Text style={[styles.sectionTitle, { color: textColor }]}>
                  {t('diagnosisDetails.recommendations')}
                </Text>
              </View>
              {diagnosis.recommendations.map((recommendation, index) => (
                <View key={index} style={styles.recommendationItem}>
                  <Text style={[styles.bullet, { color: COLORS.primary }]}>•</Text>
                  <Text style={[styles.recommendationText, { color: isDark ? '#BBBBBB' : '#444444' }]}>
                    {recommendation}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          
          <Text style={[styles.disclaimer, { color: isDark ? '#777777' : '#999999' }]}>
            {t('diagnosisDetails.disclaimer')}
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
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  date: {
    fontSize: 14,
  },
  confidenceTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  confidenceText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  condition: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  summary: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
  },
  recommendationItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 16,
    marginRight: 8,
  },
  recommendationText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
  disclaimer: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 40,
    paddingHorizontal: 24,
  },
});