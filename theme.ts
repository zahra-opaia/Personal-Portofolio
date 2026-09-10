// Nova design tokens — mirrors the Figma "Nova Color / Spacing / Radius" variable
// collections and the "Nova/*" text styles. Dark is the default theme; a Light
// palette can be added the same way once the app needs it.

export const colors = {
  bg: '#101418',
  surface: '#171C21',
  surface2: '#1D2329',
  ink: '#F6F7F5',
  inkSoft: '#A7AFB3',
  border: '#232B31',
  signal: '#FFD23F',
  onSignal: '#101418',
  teal: '#3FD6C8',
} as const;

export const spacing = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 24,
  6: 32,
  7: 48,
  8: 64,
  9: 96,
  10: 128,
} as const;

export const radius = {
  xs: 4,
  sm: 8,
  md: 14,
  lg: 20,
  full: 999,
} as const;

// Font family names as registered by useFonts() in App.tsx.
export const fonts = {
  displayExtraBold: 'Sora_800ExtraBold',
  bold: 'Sora_700Bold',
  semiBold: 'Sora_600SemiBold',
  regular: 'Sora_400Regular',
  mono: 'IBMPlexMono_500Medium',
} as const;

export const type = {
  display: { fontFamily: fonts.displayExtraBold, fontSize: 34, lineHeight: 41, letterSpacing: -0.68 },
  titleLarge: { fontFamily: fonts.bold, fontSize: 28, lineHeight: 34, letterSpacing: -0.28 },
  title: { fontFamily: fonts.bold, fontSize: 20, lineHeight: 26, letterSpacing: 0 },
  titleSmall: { fontFamily: fonts.semiBold, fontSize: 17, lineHeight: 22, letterSpacing: 0 },
  bodyLarge: { fontFamily: fonts.regular, fontSize: 17, lineHeight: 26, letterSpacing: 0 },
  body: { fontFamily: fonts.regular, fontSize: 15, lineHeight: 22, letterSpacing: 0 },
  bodySmall: { fontFamily: fonts.regular, fontSize: 13, lineHeight: 18, letterSpacing: 0 },
  label: { fontFamily: fonts.semiBold, fontSize: 14, lineHeight: 18, letterSpacing: 0.07 },
  caption: { fontFamily: fonts.mono, fontSize: 12, lineHeight: 16, letterSpacing: 0.72 },
} as const;
