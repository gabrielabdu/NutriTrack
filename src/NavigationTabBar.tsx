import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TabKey, TabOption } from './nutrition';
import { colors, typography } from './theme';

interface NavigationTabBarProps {
  tabs: TabOption[];
  activeTab: TabKey;
  onTabChange: (key: TabKey) => void;
}

const NavigationTabBar: React.FC<NavigationTabBarProps> = ({ tabs, activeTab, onTabChange }) => (
  <View style={styles.container} accessibilityRole="tablist">
    {tabs.map((tab) => {
      const active = tab.key === activeTab;
      return (
        <Pressable
          key={tab.key}
          style={styles.tab}
          onPress={() => onTabChange(tab.key)}
          accessibilityRole="tab"
          accessibilityState={{ selected: active }}
        >
          <Text style={[styles.label, active && styles.activeLabel]}>{tab.label}</Text>
          <View style={[styles.underline, active && styles.underlineActive]} />
        </Pressable>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.card,
  },
  tab: { flex: 1, alignItems: 'center', paddingTop: 16 },
  label: { ...typography.tab, color: colors.textSecondary, paddingBottom: 12 },
  activeLabel: { color: colors.primary },
  underline: { height: 2, alignSelf: 'stretch', backgroundColor: 'transparent' },
  underlineActive: { backgroundColor: colors.primary },
});

export default NavigationTabBar;