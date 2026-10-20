import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DailyProgress } from './nutrition';
import { colors, spacing } from './theme';
import CircularProgress from './CircularProgress';
import MacroBar from './MacroBar';

interface NutrientGoalCardProps {
  progress: DailyProgress;
  caloriesLeft: number;
}

const NutrientGoalCard: React.FC<NutrientGoalCardProps> = ({ progress, caloriesLeft }) => (
  <View style={styles.container}>
    <CircularProgress
      percentage={progress.percentage}
      centerValue={`${caloriesLeft}`}
      centerLabel="kcal left"
      arcLabel={`${progress.percentage}% of daily goal`}
    />
    <View style={styles.macros}>
      {progress.macros.map((macro) => (
        <MacroBar key={macro.name} macro={macro} />
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mint,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.xxl,
  },
  macros: { flex: 1, marginLeft: spacing.lg, paddingTop: spacing.md },
});

export default NutrientGoalCard;