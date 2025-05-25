import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  ActivityIndicator
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { useAPIKey } from '@/context/APIKeyContext';
import { useDiagnosis } from '@/context/DiagnosisContext';
import { Header } from '@/components/Header';
import { ChevronDown, ChevronUp, MapPin, Utensils, CircleAlert as AlertCircle } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '@/constants/Colors';

export default function DiagnosisScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const { t, language, changeLanguage } = useLanguage();
  const { apiKey } = useAPIKey();
  const { addDiagnosis } = useDiagnosis();
  
  const [diet, setDiet] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [location, setLocation] = useState('');
  const [expandedSection, setExpandedSection] = useState('symptoms');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const isDark = theme === 'dark';
  const backgroundColor = isDark ? '#1A1A1A' : COLORS.background;
  const cardBackground = isDark ? '#2A2A2A' : '#FFFFFF';
  const textColor = isDark ? '#EFEFEF' : COLORS.text;
  const placeholderColor = isDark ? '#777777' : '#999999';
  const borderColor = isDark ? '#444444' : '#E0E0E0';
  
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? '' : section);
  };
  
  const isFormValid = symptoms.trim().length > 0;
  
  const handleDiagnosis = async () => {
    if (!isFormValid) {
      setError(t('diagnosis.errorSymptoms'));
      return;
    }
    
    if (!apiKey) {
      setError(t('diagnosis.errorApiKey'));
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API call to AI service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock diagnosis result
      const diagnosisResult = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        condition: 'Seasonal Allergies',
        summary: 'Based on your symptoms and location, you may be experiencing seasonal allergies. Recommend avoiding known allergens and considering over-the-counter antihistamines.',
        recommendations: [
          'Avoid outdoor activities during high pollen counts',
          'Keep windows closed during allergy season',
          'Consider using air purifiers',
          'Consult with a healthcare provider about antihistamine options'
        ],
        confidence: 0.85,
        symptoms: symptoms,
        diet: diet || 'Not specified',
        location: location || 'Not specified'
      };
      
      // Add to diagnosis history
      addDiagnosis(diagnosisResult);
      
      // Navigate to results
      router.push({
        pathname: '/diagnosis-details',
        params: { id: diagnosisResult.id }
      });
    } catch (err) {
      setError(t('diagnosis.errorGeneric'));
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Header title={t('diagnosis.title')} />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Animated.View entering={FadeInDown.delay(200).duration(500)}>
          <Text style={[styles.subtitle, { color: textColor }]}>
            {t('diagnosis.subtitle')}
          </Text>
          
          {/* Language selector */}
          <View style={[styles.section, styles.languageSection, { backgroundColor: cardBackground }]}>
            <Text style={[styles.sectionTitle, { color: textColor }]}>
              {t('diagnosis.language')}
            </Text>
            <View style={styles.languageOptions}>
              {['en', 'am', 'om', 'so', 'ar', 'fr', 'ti'].map((lang) => (
                <TouchableOpacity
                  key={lang}
                  style={[
                    styles.languageOption,
                    language === lang && styles.selectedLanguage,
                    { borderColor: COLORS.primary }
                  ]}
                  onPress={() => changeLanguage(lang)}
                >
                  <Text
                    style={[
                      styles.languageText,
                      language === lang && styles.selectedLanguageText,
                      { color: language === lang ? COLORS.primary : textColor }
                    ]}
                  >
                    {t(`languages.${lang}`)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          {/* Symptoms Section */}
          <TouchableOpacity
            style={[
              styles.section, 
              { backgroundColor: cardBackground },
              expandedSection === 'symptoms' && styles.expandedSection
            ]}
            onPress={() => toggleSection('symptoms')}
          >
            <View style={styles.sectionHeader}>
              <View style={styles.sectionIcon}>
                <AlertCircle size={20} color={COLORS.accent} />
              </View>
              <Text style={[styles.sectionTitle, { color: textColor }]}>
                {t('diagnosis.symptoms')}
              </Text>
              {expandedSection === 'symptoms' ? 
                <ChevronUp size={24} color={isDark ? '#777777' : '#999999'} /> :
                <ChevronDown size={24} color={isDark ? '#777777' : '#999999'} />
              }
            </View>
            
            {expandedSection === 'symptoms' && (
              <View style={styles.inputContainer}>
                <TextInput
                  style={[
                    styles.textInput, 
                    styles.textArea,
                    { 
                      color: textColor,
                      borderColor: borderColor,
                      backgroundColor: isDark ? '#333333' : '#F9F9F9'
                    }
                  ]}
                  placeholder={t('diagnosis.symptomsPlaceholder')}
                  placeholderTextColor={placeholderColor}
                  multiline
                  numberOfLines={5}
                  textAlignVertical="top"
                  value={symptoms}
                  onChangeText={setSymptoms}
                />
              </View>
            )}
          </TouchableOpacity>
          
          {/* Diet Section */}
          <TouchableOpacity
            style={[
              styles.section, 
              { backgroundColor: cardBackground },
              expandedSection === 'diet' && styles.expandedSection
            ]}
            onPress={() => toggleSection('diet')}
          >
            <View style={styles.sectionHeader}>
              <View style={styles.sectionIcon}>
                <Utensils size={20} color={COLORS.primary} />
              </View>
              <Text style={[styles.sectionTitle, { color: textColor }]}>
                {t('diagnosis.diet')}
              </Text>
              {expandedSection === 'diet' ? 
                <ChevronUp size={24} color={isDark ? '#777777' : '#999999'} /> :
                <ChevronDown size={24} color={isDark ? '#777777' : '#999999'} />
              }
            </View>
            
            {expandedSection === 'diet' && (
              <View style={styles.inputContainer}>
                <TextInput
                  style={[
                    styles.textInput, 
                    styles.textArea,
                    { 
                      color: textColor,
                      borderColor: borderColor,
                      backgroundColor: isDark ? '#333333' : '#F9F9F9'
                    }
                  ]}
                  placeholder={t('diagnosis.dietPlaceholder')}
                  placeholderTextColor={placeholderColor}
                  multiline
                  numberOfLines={4}
                  textAlignVertical="top"
                  value={diet}
                  onChangeText={setDiet}
                />
              </View>
            )}
          </TouchableOpacity>
          
          {/* Location Section */}
          <TouchableOpacity
            style={[
              styles.section, 
              { backgroundColor: cardBackground },
              expandedSection === 'location' && styles.expandedSection
            ]}
            onPress={() => toggleSection('location')}
          >
            <View style={styles.sectionHeader}>
              <View style={styles.sectionIcon}>
                <MapPin size={20} color={COLORS.secondary} />
              </View>
              <Text style={[styles.sectionTitle, { color: textColor }]}>
                {t('diagnosis.location')}
              </Text>
              {expandedSection === 'location' ? 
                <ChevronUp size={24} color={isDark ? '#777777' : '#999999'} /> :
                <ChevronDown size={24} color={isDark ? '#777777' : '#999999'} />
              }
            </View>
            
            {expandedSection === 'location' && (
              <View style={styles.inputContainer}>
                <TextInput
                  style={[
                    styles.textInput,
                    { 
                      color: textColor,
                      borderColor: borderColor,
                      backgroundColor: isDark ? '#333333' : '#F9F9F9'
                    }
                  ]}
                  placeholder={t('diagnosis.locationPlaceholder')}
                  placeholderTextColor={placeholderColor}
                  value={location}
                  onChangeText={setLocation}
                />
              </View>
            )}
          </TouchableOpacity>
          
          {error && (
            <Text style={styles.errorText}>{error}</Text>
          )}
          
          <TouchableOpacity
            style={[
              styles.diagnosisButton,
              !isFormValid && styles.disabledButton
            ]}
            onPress={handleDiagnosis}
            disabled={!isFormValid || isLoading}
          >
            <LinearGradient
              colors={isFormValid ? [COLORS.primary, COLORS.secondary] : ['#AAAAAA', '#888888']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.buttonGradient}
            >
              {isLoading ? (
                <ActivityIndicator color="white" size="small" />
              ) : (
                <Text style={styles.buttonText}>
                  {t('diagnosis.analyzeButton')}
                </Text>
              )}
            </LinearGradient>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.apiKeyButton}
            onPress={() => router.push('/api-key')}
          >
            <Text style={styles.apiKeyText}>
              {apiKey ? t('diagnosis.changeApiKey') : t('diagnosis.addApiKey')}
            </Text>
          </TouchableOpacity>
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
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 16,
    marginBottom: 24,
  },
  section: {
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  expandedSection: {
    paddingBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  sectionIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(60, 110, 113, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 16,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    minHeight: 100,
  },
  diagnosisButton: {
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 30,
    overflow: 'hidden',
  },
  disabledButton: {
    opacity: 0.7,
  },
  buttonGradient: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  apiKeyButton: {
    alignItems: 'center',
    padding: 16,
    marginBottom: 40,
  },
  apiKeyText: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '500',
  },
  errorText: {
    color: '#E53935',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  languageSection: {
    padding: 16,
    marginBottom: 16,
  },
  languageOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
  },
  languageOption: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 8,
    marginBottom: 8,
  },
  selectedLanguage: {
    backgroundColor: 'rgba(60, 110, 113, 0.1)',
  },
  languageText: {
    fontSize: 14,
  },
  selectedLanguageText: {
    fontWeight: '600',
  },
});