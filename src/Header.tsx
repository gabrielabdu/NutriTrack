import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing, typography } from './theme';
import { LeafIcon } from './icons';

const Header: React.FC = () => (
  <View style={styles.container} accessibilityRole="header">
    <View style={styles.row}>
      <Text style={styles.title}>NutriTrack</Text>
      <View style={styles.leaf}>
        <LeafIcon size={26} color={colors.primary} />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mint,
    alignItems: 'center',
    paddingTop: spacing.xl,
    paddingBottom: spacing.sm,
  },
  row: { flexDirection: 'row', alignItems: 'flex-start' },
  title: typography.brand,
  leaf: { marginLeft: 2, marginTop: -2 },
});

export default Header;