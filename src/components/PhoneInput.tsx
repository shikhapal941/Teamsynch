import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PhoneNumberInput from 'react-native-phone-number-input';

interface PhoneInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onChangeFormattedText: (text: string) => void;
  error?: string;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChangeText,
  onChangeFormattedText,
  error,
}) => {
  const phoneInput = React.useRef<PhoneNumberInput>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Phone Number</Text>
      <View style={[styles.inputContainer, error && styles.inputContainerError]}>
        <PhoneNumberInput
          ref={phoneInput}
          value={value}
          defaultCode="US"
          layout="first"
          onChangeText={onChangeText}
          onChangeFormattedText={onChangeFormattedText}
          containerStyle={styles.phoneContainer}
          textContainerStyle={styles.textContainer}
          textInputStyle={styles.textInput}
          codeTextStyle={styles.codeText}
          flagButtonStyle={styles.flagButton}
          textInputProps={{
            placeholder: 'Enter phone number',
            placeholderTextColor: '#999',
          }}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  inputContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    overflow: 'hidden',
  },
  inputContainerError: {
    borderColor: '#FF3B30',
  },
  phoneContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    width: '100%',
  },
  textContainer: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 0,
    borderRadius: 12,
  },
  textInput: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 14,
  },
  codeText: {
    fontSize: 16,
    color: '#333',
  },
  flagButton: {
    paddingLeft: 12,
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});

