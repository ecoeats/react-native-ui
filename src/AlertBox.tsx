import React, { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';
import { useUI } from './context/UIContext';
import Text from './Text';

export default function AlertBox({
  icon,
  color,
  textColor,
  children,
  ...props
}: ViewProps & {
  icon?: ReactNode;
  color?: string;
  textColor?: string;
  children: any;
}) {
  const { theme } = useUI();

  return (
    <View
      {...props}
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
        {typeof children === 'string' ? (
          <Text color={textColor || theme.COLORS.WHITE}>{children}</Text>
        ) : (
          children
        )}
      </View>
    </View>
  );
}
