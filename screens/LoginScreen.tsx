import { View, Text, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BurstMark from '../components/BurstMark';
import GoogleButton from '../components/GoogleButton';
import { colors, spacing, type, fonts } from '../theme';

export default function LoginScreen() {
  const handleGoogleSignIn = () => {
    // Wire up expo-auth-session / @react-native-google-signin with real
    // OAuth client IDs before shipping — this is a UI-only stub for now.
    Alert.alert('Continue with Google', 'Google sign-in isn’t wired up yet.');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.brand}>
        <BurstMark size={44} />
        <Text style={styles.wordmark}>Nova</Text>
        <Text style={styles.tagline}>The moment an idea lands.</Text>
      </View>

      <View style={styles.cta}>
        <GoogleButton onPress={handleGoogleSignIn} />
        <Text style={styles.legal}>
          By continuing, you agree to Nova’s Terms of Service and Privacy Policy.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    justifyContent: 'space-between',
  },
  brand: {
    alignItems: 'center',
    gap: 14,
    marginTop: 120,
  },
  wordmark: {
    fontFamily: fonts.displayExtraBold,
    fontSize: 30,
    letterSpacing: -0.6,
    color: colors.ink,
  },
  tagline: {
    ...type.body,
    color: colors.inkSoft,
  },
  cta: {
    alignItems: 'center',
    gap: spacing[5],
    paddingHorizontal: spacing[6],
    marginBottom: spacing[8],
  },
  legal: {
    fontFamily: fonts.regular,
    fontSize: 12,
    lineHeight: 18,
    color: colors.inkSoft,
    textAlign: 'center',
  },
});
