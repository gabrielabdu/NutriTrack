import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { cardShadow, colors, radius } from './theme';
import { PlusIcon } from './icons';

interface AddMealButtonProps {
  onPress?: () => void;
}

const AddMealButton: React.FC<AddMealButtonProps> = ({ onPress }) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    accessibilityRole="button"
    accessibilityLabel="Add Meal"
  >
    <View style={styles.circle}>
      <PlusIcon size={22} color={colors.white} />
    </View>
    <Text style={styles.label}>Add Meal</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.card,
    alignItems: 'center',
    paddingVertical: 14,
    ...cardShadow,
  },
  pressed: { opacity: 0.85 },
  circle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  label: { fontSize: 13, color: colors.textPrimary },
});

export default AddMealButton;