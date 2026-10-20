import { DailyProgress, Meal, TabOption } from './nutrition';
import { colors } from './theme';

export const dailyProgress: DailyProgress = {
  consumedCalories: 4500,
  goalCalories: 6000,
  percentage: 75,
  macros: [
    { name: 'Protein', current: 80, goal: 120, unit: 'g', color: colors.primary },
    { name: 'Carbs', current: 200, goal: 250, unit: 'g', color: colors.primary },
    { name: 'Fat', current: 50, goal: 70, unit: 'g', color: colors.primary },
  ],
};

export const caloriesLeft = 1500;

export const meals: Meal[] = [
  {
    id: 'meal-1',
    name: 'Breakfast',
    items: ['Oatmeal with berries', '2% Milk', 'Almonds'],
    calories: 380,
  },
  {
    id: 'meal-2',
    name: 'Lunch',
    items: ['Grilled Chicken Salad', 'Whole Wheat Bread', 'Olive Oil Dressing'],
    calories: 450,
  },
];

export const tabs: TabOption[] = [
  { key: 'today', label: 'TODAY' },
  { key: 'history', label: 'HISTORY' },
  { key: 'foods', label: 'FOODS' },
  { key: 'settings', label: 'SETTINGS' },
];