import { Platform, TextStyle, ViewStyle } from 'react-native';

export const colors = {
  mint: '#EBF6ED',
  background: '#F5F7F5',
  primary: '#27AE60',
  primaryDark: '#2E7D32',
  ringTrack: '#CFE8D4',
  barTrack: '#D6E9DA',
  textPrimary: '#1E2923',
  textSecondary: '#6B7280',
  card: '#FFFFFF',
  shadow: '#000000',
  white: '#FFFFFF',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
} as const;

export const radius = {
  card: 10,
  pill: 999,
} as const;

export const cardShadow: ViewStyle = Platform.select<ViewStyle>({
  ios: {
    shadowColor: colors.shadow,
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  android: { elevation: 2 },
  default: {},
}) as ViewStyle;

export const typography: Record<
  'brand' | 'sectionTitle' | 'body' | 'caption' | 'tab' | 'button',
  TextStyle
> = {
  brand: { fontSize: 28, fontWeight: '800', letterSpacing: -0.5, color: colors.textPrimary },
  sectionTitle: { fontSize: 17, fontWeight: '400', color: colors.textPrimary },
  body: { fontSize: 14, fontWeight: '400', color: colors.textPrimary },
  caption: { fontSize: 12, fontWeight: '400', color: colors.textSecondary },
  tab: { fontSize: 13, fontWeight: '500', letterSpacing: 0.6 },
  button: { fontSize: 15, fontWeight: '600', letterSpacing: 0.8, color: colors.white },
};