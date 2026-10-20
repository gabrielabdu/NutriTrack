import React, { useCallback, useState } from 'react';
import { Alert, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import NutrientGoalCard from './src/NutrientGoalCard';
import NavigationTabBar from './src/NavigationTabBar';
import MealCard from './src/MealCard';
import AddMealButton from './src/AddMealButton';
import LogFoodButton from './src/LogFoodButton';
import { caloriesLeft, dailyProgress, meals, tabs } from './src/mockData';
import { TabKey } from './src/nutrition';
import { colors, spacing, typography } from './src/theme';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('today');

  const handleAddMeal = useCallback(() => Alert.alert('Add Meal', 'Add meal flow goes here.'), []);
  const handleLogFood = useCallback(() => Alert.alert('Log Food', 'Log food flow goes here.'), []);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.mint} />
      <View style={styles.screen}>
        <Header />
        <NutrientGoalCard progress={dailyProgress} caloriesLeft={caloriesLeft} />
        <NavigationTabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.sectionTitle}>MEALS</Text>
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
          <AddMealButton onPress={handleAddMeal} />
        </ScrollView>

        <View style={styles.fab} pointerEvents="box-none">
          <LogFoodButton onPress={handleLogFood} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.mint },
  screen: { flex: 1, backgroundColor: colors.background },
  scroll: { flex: 1 },
  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: 110,
  },
  sectionTitle: { ...typography.sectionTitle, marginBottom: spacing.md },
  fab: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: spacing.xxl,
    alignItems: 'center',
  },
});

export default App;