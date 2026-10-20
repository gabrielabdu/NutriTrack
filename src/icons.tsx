import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
}

export const LeafIcon: React.FC<IconProps> = ({ size = 26, color = '#27AE60' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M21 3C11 3 4 8 4 15c0 1.3.3 2.4.8 3.4L3 21l1.5 1 2-2.7c1 .5 2.1.7 3.3.7 7 0 11.2-6.5 11.2-17z"
      fill={color}
    />
    <Path d="M7 17C9 12 13 9 17 7" stroke="#EBF6ED" strokeWidth={1.2} strokeLinecap="round" fill="none" />
  </Svg>
);

export const PlusIcon: React.FC<IconProps> = ({ size = 20, color = '#FFFFFF' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="M12 5v14M5 12h14" stroke={color} strokeWidth={2.6} strokeLinecap="round" fill="none" />
  </Svg>
);