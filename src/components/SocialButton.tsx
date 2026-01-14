import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../assets/colors';

interface SocialButtonProps {
  provider: 'google' | 'facebook';
  onPress: () => void;
  loading?: boolean;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  provider,
  onPress,
  loading = false,
}) => {
  const isGoogle = provider === 'google';

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      activeOpacity={0.8}
      style={[styles.button, isGoogle ? styles.googleButton : styles.facebookButton]}
    >
      <View style={styles.iconContainer}>
        {isGoogle ? (
          <Ionicons name="logo-google" size={20} color={colors.google} />
        ) : (
          <Ionicons name="logo-facebook" size={20} color={colors.facebook} />
        )}
      </View>
      <Text style={styles.buttonText}>
        Continue with {isGoogle ? 'Google' : 'Facebook'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    minHeight: 52,
    marginBottom: 12,
  },
  googleButton: {
    borderColor: '#E0E0E0',
  },
  facebookButton: {
    borderColor: '#1877F2',
    backgroundColor: '#1877F2',
  },
  iconContainer: {
    marginRight: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

