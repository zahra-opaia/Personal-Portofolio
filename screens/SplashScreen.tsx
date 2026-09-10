import { View, Text, StyleSheet } from 'react-native';
import BurstMark from '../components/BurstMark';
import { colors, type } from '../theme';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.brand}>
        <BurstMark size={64} />
        <Text style={styles.wordmark}>Nova</Text>
      </View>
      <Text style={styles.version}>v1.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    alignItems: 'center',
    gap: 20,
  },
  wordmark: {
    ...type.display,
    color: colors.ink,
  },
  version: {
    ...type.caption,
    color: colors.inkSoft,
    position: 'absolute',
    bottom: 64,
    letterSpacing: 3,
  },
});
