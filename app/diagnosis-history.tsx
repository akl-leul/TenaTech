import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { useDiagnosis } from '@/context/DiagnosisContext';
import { Header } from '@/components/Header';
import { COLORS } from '@/constants/Colors';
import { ChevronRight } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function DiagnosisHistoryScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const { t } = useLanguage();
  const { diagnosisHistory, clearHistory } = useDiagnosis();
  
  const isDark = theme === 'dark';
  const backgroundColor = isDark ? '#1A1A1A' : COLORS.background;
  const cardBackground = isDark ? '#2A2A2A' : '#FFFFFF';
  const textColor = isDark ? '#EFEFEF' : COLORS.text;
  
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Header title={t('diagnosisHistory.title')} />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View entering={FadeInDown.delay(200).duration(500)}>
          {diagnosisHistory.length > 0 ? (
            <>
              {diagnosisHistory.map((diagnosis, index) => (
                <TouchableOpacity
                  key={diagnosis.id}
                  style={[styles.card, { backgroundColor: cardBackground }]}
                  onPress={() => router.push({
                    pathname: '/diagnosis-details',
                    params: { id: diagnosis.id }
                  })}
                >
                  <View style={styles.cardContent}>
                    <Text style={[styles.date, { color: isDark ? '#AAAAAA' : '#666666' }]}>
                      {new Date(diagnosis.date).toLocaleDateString()}
                    </Text>
                    <Text style={[styles.condition, { color: textColor }]}>
                      {diagnosis.condition}
                    </Text>
                    <Text 
                      style={[styles.summary, { color: isDark ? '#BBBBBB' : '#444444' }]}
                      numberOfLines={2}
                    >
                      {diagnosis.summary}
                    </Text>
                  </View>
                  <ChevronRight size={20} color={isDark ? '#777777' : '#999999'} />
                </TouchableOpacity>
              ))}
              
              <TouchableOpacity
                style={styles.clearButton}
                onPress={clearHistory}
              >
                <Text style={styles.clearButtonText}>
                  {t('diagnosisHistory.clearHistory')}
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <View style={[styles.emptyContainer, { backgroundColor: cardBackground }]}>
              <Text style={[styles.emptyText, { color: isDark ? '#AAAAAA' : '#666666' }]}>
                {t('diagnosisHistory.empty')}
              </Text>
              <TouchableOpacity
                style={styles.startButton}
                onPress={() => router.push('/diagnosis')}
              >
                <Text style={styles.startButtonText}>
                  {t('diagnosisHistory.startDiagnosis')}
                </Text>
              </TouchableOpacity>
            </View>
          )}
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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  cardContent: {
    flex: 1,
    marginRight: 16,
  },
  date: {
    fontSize: 12,
    marginBottom: 4,
  },
  condition: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  summary: {
    fontSize: 14,
    lineHeight: 20,
  },
  emptyContainer: {
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  startButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  startButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  clearButton: {
    alignItems: 'center',
    padding: 16,
    marginTop: 8,
    marginBottom: 40,
  },
  clearButtonText: {
    fontSize: 14,
    color: '#E53935',
    fontWeight: '500',
  },
});