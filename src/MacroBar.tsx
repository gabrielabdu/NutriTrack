import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MacroNutrient } from './nutrition';
import { colors } from './theme';

interface MacroBarProps {
  macro: MacroNutrient;
}

const MacroBar: React.FC<MacroBarProps> = ({ macro }) => {
  const ratio = macro.goal > 0 ? Math.min(macro.current / macro.goal, 1) : 0;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.name}>{macro.name}</Text>
        <Text style={styles.value}>
          {macro.current}
          {macro.unit} / {macro.goal}
          {macro.unit}
        </Text>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${ratio * 100}%`, backgroundColor: macro.color }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  name: { fontSize: 13, fontWeight: '600', color: colors.textPrimary },
  value: { fontSize: 13, color: colors.textPrimary },
  track: {
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.barTrack,
    overflow: 'hidden',
  },
  fill: { height: 6, borderRadius: 3 },
});

export default MacroBar;