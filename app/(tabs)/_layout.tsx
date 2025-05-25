import { Tabs } from 'expo-router';
import { Stethoscope,Home, User, Settings } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { COLORS } from '@/constants/Colors';

export default function TabLayout() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const isDark = theme === 'dark';
  const tabBarBg = isDark ? '#1A1A1A' : '#FFFFFF';
  const activeColor = COLORS.primary;
  const inactiveColor = isDark ? '#777' : '#999';

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: tabBarBg,
          borderTopColor: isDark ? '#333' : '#E0E0E0',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('tabs.home'),
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="diagnosis"
        options={{
          title: t('tabs.diagnosis'),
          tabBarIcon: ({ color, size }) => <Stethoscope size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: t('tabs.profile'),
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t('tabs.settings'),
          tabBarIcon: ({ color, size }) => <Settings size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}