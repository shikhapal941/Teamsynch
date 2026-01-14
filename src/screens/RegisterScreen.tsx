import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import { SocialButton } from '../components/SocialButton';
import { PhoneInput } from '../components/PhoneInput';
import {
  emailRegisterSchema,
  mobileRegisterSchema,
  type EmailRegisterFormData,
  type MobileRegisterFormData,
} from '../utils/validation';
import { colors } from '../assets/colors';

type RegisterMethod = 'email' | 'mobile';

export const RegisterScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const [registerMethod, setRegisterMethod] = useState<RegisterMethod>('email');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const emailForm = useForm<EmailRegisterFormData>({
    resolver: zodResolver(emailRegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      termsAccepted: false,
    },
  });

  const mobileForm = useForm<MobileRegisterFormData>({
    resolver: zodResolver(mobileRegisterSchema),
    defaultValues: {
      phoneNumber: '',
      termsAccepted: false,
    },
  });

  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');

  const onEmailSubmit = async (data: EmailRegisterFormData) => {
    setIsLoading(true);
    try {
      // TODO: Implement email registration API call
      console.log('Email registration:', data);
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API call
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onMobileSubmit = async (data: MobileRegisterFormData) => {
    setIsLoading(true);
    try {
      // TODO: Implement mobile registration API call
      console.log('Mobile registration:', { ...data, phoneNumber: formattedPhoneNumber });
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API call
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement Google Sign-In
      console.log('Google Sign-In');
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      console.error('Google Sign-In error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFacebookSignIn = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement Facebook Sign-In
      console.log('Facebook Sign-In');
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      console.error('Facebook Sign-In error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.backgroundGradientStart, colors.backgroundGradientEnd]}
        style={styles.gradient}
      >
        {/* Fixed Header */}
        <SafeAreaView style={styles.safeHeader} edges={['top']}>
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Ionicons name="people" size={32} color={colors.primary} />
              <Text style={styles.logoText}>TeamSynch</Text>
            </View>
          </View>
        </SafeAreaView>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentInsetAdjustmentBehavior="automatic"
            bounces={true}
          >

            {/* Title */}
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Create Account</Text>
              <Text style={styles.subtitle}>
                Join TeamSynch to collaborate with your team
              </Text>
            </View>

            {/* Tab Selector */}
            <View style={styles.tabContainer}>
              <TouchableOpacity
                style={[
                  styles.tab,
                  registerMethod === 'email' && styles.tabActive,
                ]}
                onPress={() => setRegisterMethod('email')}
              >
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color={registerMethod === 'email' ? colors.primary : colors.textSecondary}
                />
                <Text
                  style={[
                    styles.tabText,
                    registerMethod === 'email' && styles.tabTextActive,
                  ]}
                >
                  Email
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.tab,
                  registerMethod === 'mobile' && styles.tabActive,
                ]}
                onPress={() => setRegisterMethod('mobile')}
              >
                <Ionicons
                  name="call-outline"
                  size={20}
                  color={registerMethod === 'mobile' ? colors.primary : colors.textSecondary}
                />
                <Text
                  style={[
                    styles.tabText,
                    registerMethod === 'mobile' && styles.tabTextActive,
                  ]}
                >
                  Mobile
                </Text>
              </TouchableOpacity>
            </View>

            {/* Form Section */}
            <View style={styles.formContainer}>
              {registerMethod === 'email' ? (
                <View>
                  <Controller
                    control={emailForm.control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <CustomInput
                        label="Email"
                        placeholder="Enter your email"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        leftIcon="mail-outline"
                        error={emailForm.formState.errors.email?.message}
                      />
                    )}
                  />

                  <Controller
                    control={emailForm.control}
                    name="password"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <CustomInput
                        label="Password"
                        placeholder="Create a password"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        secureTextEntry
                        showPasswordToggle
                        leftIcon="lock-closed-outline"
                        error={emailForm.formState.errors.password?.message}
                      />
                    )}
                  />

                  <Controller
                    control={emailForm.control}
                    name="confirmPassword"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <CustomInput
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        secureTextEntry
                        showPasswordToggle
                        leftIcon="lock-closed-outline"
                        error={emailForm.formState.errors.confirmPassword?.message}
                      />
                    )}
                  />

                  <View style={styles.checkboxContainer}>
                    <TouchableOpacity
                      style={styles.checkbox}
                      onPress={() => {
                        const newValue = !termsAccepted;
                        setTermsAccepted(newValue);
                        emailForm.setValue('termsAccepted', newValue);
                      }}
                    >
                      <Ionicons
                        name={termsAccepted ? 'checkbox' : 'square-outline'}
                        size={24}
                        color={termsAccepted ? colors.primary : colors.textTertiary}
                      />
                    </TouchableOpacity>
                    <Text style={styles.checkboxText}>
                      I agree to the{' '}
                      <Text style={styles.linkText}>Terms & Conditions</Text> and{' '}
                      <Text style={styles.linkText}>Privacy Policy</Text>
                    </Text>
                  </View>
                  {emailForm.formState.errors.termsAccepted && (
                    <Text style={styles.errorText}>
                      {emailForm.formState.errors.termsAccepted.message}
                    </Text>
                  )}

                  <CustomButton
                    title="Sign Up"
                    onPress={emailForm.handleSubmit(onEmailSubmit)}
                    loading={isLoading}
                    disabled={!termsAccepted}
                    style={styles.submitButton}
                  />
                </View>
              ) : (
                <View>
                  <PhoneInput
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    onChangeFormattedText={setFormattedPhoneNumber}
                    error={mobileForm.formState.errors.phoneNumber?.message}
                  />

                  <View style={styles.checkboxContainer}>
                    <TouchableOpacity
                      style={styles.checkbox}
                      onPress={() => {
                        const newValue = !termsAccepted;
                        setTermsAccepted(newValue);
                        mobileForm.setValue('termsAccepted', newValue);
                      }}
                    >
                      <Ionicons
                        name={termsAccepted ? 'checkbox' : 'square-outline'}
                        size={24}
                        color={termsAccepted ? colors.primary : colors.textTertiary}
                      />
                    </TouchableOpacity>
                    <Text style={styles.checkboxText}>
                      I agree to the{' '}
                      <Text style={styles.linkText}>Terms & Conditions</Text> and{' '}
                      <Text style={styles.linkText}>Privacy Policy</Text>
                    </Text>
                  </View>
                  {mobileForm.formState.errors.termsAccepted && (
                    <Text style={styles.errorText}>
                      {mobileForm.formState.errors.termsAccepted.message}
                    </Text>
                  )}

                  <CustomButton
                    title="Continue"
                    onPress={() => {
                      mobileForm.setValue('phoneNumber', formattedPhoneNumber);
                      mobileForm.handleSubmit(onMobileSubmit)();
                    }}
                    loading={isLoading}
                    disabled={!termsAccepted || !formattedPhoneNumber}
                    style={styles.submitButton}
                  />
                </View>
              )}
            </View>

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.divider} />
            </View>

            {/* Social Auth */}
            <View style={styles.socialContainer}>
              <SocialButton
                provider="google"
                onPress={handleGoogleSignIn}
                loading={isLoading}
              />
              <SocialButton
                provider="facebook"
                onPress={handleFacebookSignIn}
                loading={isLoading}
              />
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Already have an account?{' '}
                <Text style={styles.footerLink}>Sign In</Text>
              </Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  safeHeader: {
    backgroundColor: 'transparent',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 16,
    paddingBottom: 40,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 16,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginLeft: 8,
  },
  titleContainer: {
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 4,
    marginBottom: 24,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  tabActive: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  tabTextActive: {
    color: colors.primary,
  },
  formContainer: {
    marginBottom: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
    marginTop: 8,
  },
  checkbox: {
    marginRight: 12,
    marginTop: 2,
  },
  checkboxText: {
    flex: 1,
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  linkText: {
    color: colors.primary,
    fontWeight: '600',
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: -12,
    marginBottom: 8,
    marginLeft: 4,
  },
  submitButton: {
    marginTop: 8,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  dividerText: {
    marginHorizontal: 16,
    fontSize: 14,
    color: '#999',
    fontWeight: '600',
  },
  socialContainer: {
    marginBottom: 24,
  },
  footer: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
  footerLink: {
    color: colors.primary,
    fontWeight: '600',
  },
});

