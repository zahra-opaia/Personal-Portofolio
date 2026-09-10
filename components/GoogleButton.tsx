import { Pressable, Text, View, StyleSheet } from 'react-native';
import { colors, radius, spacing, type, fonts } from '../theme';

export default function GoogleButton({ onPress }: { onPress?: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <View style={styles.badge}>
        <Text style={styles.g}>G</Text>
      </View>
      <Text style={styles.label}>Continue with Google</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[3],
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[5],
    borderRadius: radius.sm,
    backgroundColor: colors.surface2,
    borderWidth: 1,
    borderColor: colors.border,
    width: '100%',
  },
  pressed: {
    opacity: 0.75,
  },
  badge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  g: {
    fontFamily: fonts.displayExtraBold,
    fontSize: 13,
    color: '#4285F4',
  },
  label: {
    ...type.label,
    color: colors.ink,
  },
});
