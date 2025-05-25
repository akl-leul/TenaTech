import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { useAPIKey } from '@/context/APIKeyContext';
import { Header } from '@/components/Header';
import { COLORS } from '@/constants/Colors';
import { Moon, Sun, Monitor, Key, Globe, Info, CircleHelp as HelpCircle, ChevronRight } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function SettingsScreen() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();
  const { apiKey } = useAPIKey();
  
  const isDark = theme === 'dark';
  const backgroundColor = isDark ? '#1A1A1A' : COLORS.background;
  const cardBackground = isDark ? '#2A2A2A' : '#FFFFFF';
  const textColor = isDark ? '#EFEFEF' : COLORS.text;
  
  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
  };
  
  const settings = [
    {
      title: t('settings.appearance'),
      items: [
        {
          icon: <Sun size={20} color={COLORS.accent} />,
          title: t('settings.lightTheme'),
          type: 'radio',
          value: theme === 'light',
          onPress: () => handleThemeChange('light')
        },
        {
          icon: <Moon size={20} color={COLORS.primary} />,
          title: t('settings.darkTheme'),
          type: 'radio',
          value: theme === 'dark',
          onPress: () => handleThemeChange('dark')
        },
        {
          icon: <Monitor size={20} color={COLORS.secondary} />,
          title: t('settings.systemTheme'),
          type: 'radio',
          value: theme === 'system',
          onPress: () => handleThemeChange('system')
        }
      ]
    },
    {
      title: t('settings.language'),
      items: [
        {
          icon: <Globe size={20} color={COLORS.primary} />,
          title: t('settings.selectLanguage'),
          subtitle: t(`languages.${language}`),
          type: 'navigate',
          onPress: () => router.push('/language-settings')
        }
      ]
    },
    {
      title: t('settings.apiSettings'),
      items: [
        {
          icon: <Key size={20} color={COLORS.primary} />,
          title: t('settings.apiKey'),
          subtitle: apiKey ? t('settings.apiKeyConfigured') : t('settings.apiKeyMissing'),
          type: 'navigate',
          onPress: () => router.push('/api-key')
        }
      ]
    },
    {
      title: t('settings.about'),
      items: [
        {
          icon: <Info size={20} color={COLORS.primary} />,
          title: t('settings.aboutApp'),
          type: 'navigate',
          onPress: () => router.push('/about')
        },
        {
          icon: <HelpCircle size={20} color={COLORS.primary} />,
          title: t('settings.help'),
          type: 'navigate',
          onPress: () => router.push('/help')
        }
      ]
    }
  ];
  
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Header title={t('settings.title')} />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View entering={FadeInDown.delay(200).duration(500)}>
          {settings.map((section, sectionIndex) => (
            <View key={sectionIndex} style={styles.section}>
              <Text style={[styles.sectionTitle, { color: isDark ? '#AAAAAA' : '#666666' }]}>
                {section.title}
              </Text>
              
              <View style={[styles.sectionCard, { backgroundColor: cardBackground }]}>
                {section.items.map((item, itemIndex) => (
                  <React.Fragment key={itemIndex}>
                    {itemIndex > 0 && (
                      <View style={[styles.separator, { backgroundColor: isDark ? '#444444' : '#EEEEEE' }]} />
                    )}
                    
                    <TouchableOpacity 
                      style={styles.settingItem}
                      onPress={item.onPress}
                    >
                      <View style={styles.settingIconContainer}>
                        {item.icon}
                      </View>
                      
                      <View style={styles.settingInfo}>
                        <Text style={[styles.settingTitle, { color: textColor }]}>
                          {item.title}
                        </Text>
                        {item.subtitle && (
                          <Text style={[styles.settingSubtitle, { color: isDark ? '#BBBBBB' : '#777777' }]}>
                            {item.subtitle}
                          </Text>
                        )}
                      </View>
                      
                      {item.type === 'radio' && (
                        <View style={[
                          styles.radioButton,
                          item.value ? { borderColor: COLORS.primary } : { borderColor: isDark ? '#555555' : '#CCCCCC' }
                        ]}>
                          {item.value && (
                            <View style={[styles.radioButtonInner, { backgroundColor: COLORS.primary }]} />
                          )}
                        </View>
                      )}
                      
                      {item.type === 'navigate' && (
                        <ChevronRight size={20} color={isDark ? '#777777' : '#999999'} />
                      )}
                    </TouchableOpacity>
                  </React.Fragment>
                ))}
              </View>
            </View>
          ))}
          
          <View style={styles.footer}>
            <Text style={[styles.version, { color: isDark ? '#777777' : '#999999' }]}>
              {t('settings.version', { version: '1.0.0' })}
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
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  sectionCard: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  settingIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(60, 110, 113, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  settingSubtitle: {
    fontSize: 14,
    marginTop: 2,
  },
  radioButton: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  separator: {
    height: 1,
    marginHorizontal: 16,
  },
  footer: {
    marginTop: 40,
    marginBottom: 24,
    alignItems: 'center',
  },
  version: {
    fontSize: 14,
  },
});