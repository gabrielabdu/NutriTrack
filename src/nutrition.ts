export interface MacroNutrient {
  name: string;
  current: number;
  goal: number;
  unit: string;
  color: string;
}

export interface MealItem {
  id: string;
  name: string;
}

export interface Meal {
  id: string;
  name: string;
  items: string[];
  calories: number;
}

export interface DailyProgress {
  consumedCalories: number;
  goalCalories: number;
  percentage: number;
  macros: MacroNutrient[];
}

export type TabKey = 'today' | 'history' | 'foods' | 'settings';

export interface TabOption {
  key: TabKey;
  label: string;
}