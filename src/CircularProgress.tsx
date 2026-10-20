import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Defs, Path, Text as SvgText, TextPath } from 'react-native-svg';
import { colors } from './theme';

interface CircularProgressProps {
  percentage: number;
  centerValue: string;
  centerLabel: string;
  arcLabel: string;
  size?: number;
  strokeWidth?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  centerValue,
  centerLabel,
  arcLabel,
  size = 160,
  strokeWidth = 10,
}) => {
  const c = size / 2;
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(Math.max(percentage, 0), 100);
  const offset = circumference * (1 - clamped / 100);
  const textRadius = radius + strokeWidth / 2 + 6;
  const arcPath = `M ${c - textRadius} ${c} A ${textRadius} ${textRadius} 0 0 1 ${c + textRadius} ${c}`;

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size}>
        <Defs>
          <Path id="arcLabelPath" d={arcPath} />
        </Defs>
        <SvgText fill={colors.textPrimary} fontSize={11} fontWeight="400">
          <TextPath href="#arcLabelPath" startOffset="50%" textAnchor="middle">
            {arcLabel}
          </TextPath>
        </SvgText>
        <Circle
          cx={c}
          cy={c}
          r={radius}
          stroke={colors.ringTrack}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx={c}
          cy={c}
          r={radius}
          stroke={colors.primary}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          fill="none"
          rotation={-90}
          originX={c}
          originY={c}
        />
      </Svg>
      <View style={styles.center} pointerEvents="none">
        <Text style={styles.value}>{centerValue}</Text>
        <Text style={styles.label}>{centerLabel}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: { fontSize: 28, fontWeight: '700', color: colors.textPrimary },
  label: { fontSize: 12, color: colors.textPrimary, marginTop: 2 },
});

export default CircularProgress;