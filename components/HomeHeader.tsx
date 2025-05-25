import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { COLORS } from '@/constants/Colors';
import { Globe, Bell } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function HomeHeader() {
  const router = useRouter();
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  const isDark = theme === 'dark';
  const textColor = isDark ? '#FFFFFF' : COLORS.text;
  
  return (
    <View style={styles.headerContainer}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      
      <LinearGradient
        colors={isDark ? ['#1A1A1A', 'transparent'] : [COLORS.background, 'transparent']}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <View>
            <Text style={[styles.appName, { color: COLORS.primary }]}>
              TenaTech
            </Text>
            <Text style={[styles.subtitle, { color: textColor }]}>
              {t('home.headerSubtitle')}
            </Text>
          </View>
          
          <View style={styles.iconContainer}>
            <TouchableOpacity 
              style={styles.iconButton}
              onPress={() => router.push('/language-settings')}
            >
              <Globe size={24} color={textColor} />
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.iconButton}
              onPress={() => router.push('/notifications')}
            >
              <Bell size={24} color={textColor} />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  gradient: {
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  appName: {
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.7,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});