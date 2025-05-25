import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { useDiagnosis } from '@/context/DiagnosisContext';
import { Header } from '@/components/Header';
import { COLORS } from '@/constants/Colors';
import { Share2, FileText, Settings, ChevronRight } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function ProfileScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const { t } = useLanguage();
  const { diagnosisHistory } = useDiagnosis();
  
  const isDark = theme === 'dark';
  const backgroundColor = isDark ? '#1A1A1A' : COLORS.background;
  const cardBackground = isDark ? '#2A2A2A' : '#FFFFFF';
  const textColor = isDark ? '#EFEFEF' : COLORS.text;
  
  const diagnosisCount = diagnosisHistory.length;
  const latestDiagnosis = diagnosisHistory[0];
  
  const profileActions = [
    {
      icon: <FileText size={20} color={COLORS.primary} />,
      title: t('profile.diagnosisHistory'),
      onPress: () => router.push('/diagnosis-history')
    },
    {
      icon: <Share2 size={20} color={COLORS.primary} />,
      title: t('profile.shareResults'),
      onPress: () => {/* Share functionality */}
    },
    {
      icon: <Settings size={20} color={COLORS.primary} />,
      title: t('profile.settings'),
      onPress: () => router.push('/settings')
    }
  ];
  
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Header title={t('profile.title')} />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View entering={FadeInDown.delay(200).duration(500)}>
          <View style={[styles.profileCard, { backgroundColor: cardBackground }]}>
            <View style={styles.profileImageContainer}>
             <Image
  source={require('../../assets/images/user.png')}
  style={styles.profileImage}
/>

            </View>
            <Text style={[styles.profileName, { color: textColor }]}>
              {t('profile.userName')}
            </Text>
            <Text style={[styles.profileEmail, { color: isDark ? '#BBBBBB' : '#666666' }]}>
              tenatech@gmail.com
            </Text>
          </View>
          
          <View style={[styles.statsCard, { backgroundColor: cardBackground }]}>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: textColor }]}>
                {diagnosisCount}
              </Text>
              <Text style={[styles.statLabel, { color: isDark ? '#BBBBBB' : '#666666' }]}>
                {t('profile.diagnoses')}
              </Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: textColor }]}>
                {latestDiagnosis ? 
                  new Date(latestDiagnosis.date).toLocaleDateString() : 
                  '-'
                }
              </Text>
              <Text style={[styles.statLabel, { color: isDark ? '#BBBBBB' : '#666666' }]}>
                {t('profile.lastCheck')}
              </Text>
            </View>
          </View>
          
          <View style={styles.actionsSection}>
            {profileActions.map((action, index) => (
              <TouchableOpacity 
                key={index}
                style={[styles.actionItem, { backgroundColor: cardBackground }]}
                onPress={action.onPress}
              >
                <View style={styles.actionIconContainer}>
                  {action.icon}
                </View>
                <Text style={[styles.actionTitle, { color: textColor }]}>
                  {action.title}
                </Text>
                <ChevronRight size={20} color={isDark ? '#777777' : '#999999'} />
              </TouchableOpacity>
            ))}
          </View>
          
          <View style={styles.disclaimer}>
            <Text style={[styles.disclaimerText, { color: isDark ? '#AAAAAA' : '#888888' }]}>
              {t('profile.disclaimer')}
            </Text>
          </View>
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
    paddingHorizontal: 16,
  },
  profileCard: {
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 3,
    borderColor: COLORS.primary,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileName: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
  },
  statsCard: {
    flexDirection: 'row',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 8,
  },
  actionsSection: {
    marginTop: 24,
  },
  actionItem: {
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
  actionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(60, 110, 113, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  disclaimer: {
    marginTop: 24,
    marginBottom: 40,
    padding: 16,
  },
  disclaimerText: {
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
  },
});