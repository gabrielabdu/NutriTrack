import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Meal } from './nutrition';
import { cardShadow, colors, radius } from './theme';

interface MealCardProps {
  meal: Meal;
}

const MealCard: React.FC<MealCardProps> = ({ meal }) => (
  <View style={styles.card} accessible accessibilityLabel={`${meal.name}, ${meal.calories} kilocalories`}>
    <View style={styles.items}>
      {meal.items.map((item, index) => (
        <Text key={`${meal.id}-${index}`} style={styles.item}>
          {item}
        </Text>
      ))}
    </View>
    <Text style={styles.calories}>{meal.calories} kcal</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.card,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    ...cardShadow,
  },
  items: { flex: 1 },
  item: { fontSize: 14, lineHeight: 22, color: colors.textPrimary },
  calories: { fontSize: 14, color: colors.textPrimary, marginLeft: 12 },
});

export default MealCard;