import { View } from 'react-native';
import { colors } from '../theme';

export default function BurstMark({ size = 64 }: { size?: number }) {
  const ringWidth = size * 0.04;
  const dotSize = size * 0.28;

  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      <View
        style={{
          position: 'absolute',
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: ringWidth,
          borderColor: colors.signal,
        }}
      />
      <View
        style={{
          width: dotSize,
          height: dotSize,
          borderRadius: dotSize / 2,
          backgroundColor: colors.signal,
        }}
      />
    </View>
  );
}
