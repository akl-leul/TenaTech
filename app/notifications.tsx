import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { Header } from '@/components/Header';
import { COLORS } from '@/constants/Colors';
import { Bell, Clock, Calendar, Activity } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function NotificationsScreen() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  const isDark = theme === 'dark';
  const backgroundColor = isDark ? '#1A1A1A' : COLORS.background;
  const cardBackground = isDark ? '#2A2A2A' : '#FFFFFF';
  const textColor = isDark ? '#EFEFEF' : COLORS.text;
  
  const notifications = [
    {
      icon: <Bell size={20} color={COLORS.primary} />,
      title: t('notifications.general.title'),
      description: t('notifications.general.description'),
    },
    {
      icon: <Clock size={20} color={COLORS.accent} />,
      title: t('notifications.reminders.title'),
      description: t('notifications.reminders.description'),
    },
    {
      icon: <Calendar size={20} color={COLORS.secondary} />,
      title: t('notifications.checkups.title'),
      description: t('notifications.checkups.description'),
    },
    {
      icon: <Activity size={20} color={COLORS.primary} />,
      title: t('notifications.updates.title'),
      description: t('notifications.updates.description'),
    },
  ];
  
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Header title={t('notifications.title')} />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View entering={FadeInDown.delay(200).duration(500)}>
          <Text style={[styles.subtitle, { color: textColor }]}>
            {t('notifications.subtitle')}
          </Text>
          
          <View style={[styles.card, { backgroundColor: cardBackground }]}>
            {notifications.map((notification, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <View 
                    style={[
                      styles.separator,
                      { backgroundColor: isDark ? '#444444' : '#EEEEEE' }
                    ]} 
                  />
                )}
                <View style={styles.notificationItem}>
                  <View style={styles.iconContainer}>
                    {notification.icon}
                  </View>
                  <View style={styles.content}>
                    <Text style={[styles.title, { color: textColor }]}>
                      {notification.title}
                    </Text>
                    <Text style={[styles.description, { color: isDark ? '#BBBBBB' : '#444444' }]}>
                      {notification.description}
                    </Text>
                  </View>
                  <Switch
                    value={true}
                    onValueChange={() => {}}
                    trackColor={{ false: '#767577', true: COLORS.primary }}
                    thumbColor={'#f4f3f4'}
                  />
                </View>
              </React.Fragment>
            ))}
          </View>
          
          <Text style={[styles.note, { color: isDark ? '#777777' : '#999999' }]}>
            {t('notifications.note')}
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
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(60, 110, 113, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  content: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
  separator: {
    height: 1,
  },
  note: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 40,
    paddingHorizontal: 24,
  },
});