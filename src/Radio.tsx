import React from 'react';
import { View } from 'react-native';
import theme from './constants/theme';

/**
 * Simple presentational radio
 */
export const Radio = ({
  style = {},
  selected = false,
  color = theme.COLORS.MUTED,
  size = 24,
}) => (
  <View
    style={[
      {
        height: size,
        width: size,
        borderRadius: size / 2,
        borderWidth: 2,
        borderColor: color,
        alignItems: 'center',
        justifyContent: 'center',
      },
      style,
    ]}
  >
    {selected ? (
      <View
        style={{
          height: size / 2,
          width: size / 2,
          borderRadius: size / 4,
          backgroundColor: color,
        }}
      />
    ) : null}
  </View>
);
