import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RegisterScreen } from './src/screens/RegisterScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <RegisterScreen />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}
