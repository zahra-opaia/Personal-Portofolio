import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Sora_400Regular, Sora_600SemiBold, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import { IBMPlexMono_500Medium } from '@expo-google-fonts/ibm-plex-mono';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import { colors } from './theme';
import { View } from 'react-native';

const SPLASH_DURATION_MS = 1400;

export default function App() {
  const [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_600SemiBold,
    Sora_700Bold,
    Sora_800ExtraBold,
    IBMPlexMono_500Medium,
  });
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: colors.bg }} />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      {showSplash ? <SplashScreen /> : <LoginScreen />}
    </SafeAreaProvider>
  );
}
