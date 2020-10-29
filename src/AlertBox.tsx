import React from 'react';
import { View } from 'react-native';
import { useUI } from './context/UIContext';
import Text from './Text';

export default function AlertBox({
  icon,
  color,
  textColor,
}: {
  icon?: React.Component;
  color?: string;
  textColor?: string;
}) {
  const { theme } = useUI();

  return (
    <View
      style={{
        marginVertical: 8,
        padding: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        backgroundColor: color || theme.COLORS.PRIMARY,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      {icon}
      <View style={{ marginRight: 18, marginLeft: 8 }}>
        <Text color={textColor || theme.COLORS.WHITE}>
          You are required by law to maintain personal food delivery vehicle
          insurance in order to deliver for ecoeats in a car.
        </Text>
      </View>
    </View>
  );
}
