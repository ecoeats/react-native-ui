import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export const Touchable = ({
  children,
  onPress,
  ...props
}: TouchableOpacityProps & { children: any }) =>
  Platform.OS === 'ios' ? (
    <TouchableOpacity onPress={onPress} accessible {...props}>
      {children}
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback onPress={onPress} {...props}>
      {children}
    </TouchableNativeFeedback>
  );
