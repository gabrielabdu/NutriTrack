import React from 'react';
import { Platform, Pressable, StyleSheet, Text } from 'react-native';
import { colors, radius, typography } from './theme';

interface LogFoodButtonProps {
  onPress?: () => void;
  label?: string;
}

const LogFoodButton: React.FC<LogFoodButtonProps> = ({ onPress, label = 'LOG FOOD' }) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    accessibilityRole="button"
    accessibilityLabel={label}
  >
    <Text style={styles.label}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    paddingVertical: 14,
    paddingHorizontal: 34,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: colors.primary,
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
      },
      android: { elevation: 4 },
      default: {},
    }),
  },
  pressed: { opacity: 0.9 },
  label: typography.button,
});

export default LogFoodButton;