import React, { useEffect } from 'react';
import { View } from 'react-native';
import theme from './constants/theme';

export default ({ show, color }: { show: boolean; color: string }) => {
  useEffect(() => {}, []);

  return (
    <View
      style={{
        height: 24,
        width: 24,
        borderRadius: 1,
        borderWidth: 2,
        borderColor: show ? color : theme.COLORS.PLACEHOLDER,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {show ? (
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 1,
            backgroundColor: show ? color : theme.COLORS.PLACEHOLDER,
          }}
        />
      ) : null}
    </View>
  );
};
