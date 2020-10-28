import React, { ReactNode, useCallback, useEffect, useRef } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableNativeFeedbackProps,
  View,
  ViewStyle,
} from 'react-native';
import Animated, { Easing, timing } from 'react-native-reanimated';
import { useUI } from './context/UIContext';
import Text from './Text';
import { Touchable } from './Touchable';
import { interpolateColors } from './utils/interpolate-colors';

export default function Button({
  children,
  viewStyle,
  icon,
  ...props
}: TouchableNativeFeedbackProps & {
  children: any;
  color?: string;
  loading?: boolean;
  viewStyle?: ViewStyle;
  fullWidth?: boolean;
  icon?: ReactNode;
  type?: 'text' | 'button';
}) {
  const { theme } = useUI();

  const {
    loading,
    type,
    fullWidth,
    disabled,
    color = theme.COLORS.PRIMARY,
  } = props;

  const bgColorValue = useRef(new Animated.Value(0)).current;

  const doAnimation = useCallback(() => {
    if (loading || disabled) {
      timing(bgColorValue, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
        toValue: 1,
      }).start();
    } else {
      timing(bgColorValue, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
        toValue: 0,
      }).start();
    }
  }, [loading, disabled]);

  useEffect(() => {
    doAnimation();
  }, [loading, disabled]);

  return (
    <Animated.View
      style={[
        {
          overflow: 'hidden',
          width: '100%',
          borderRadius: fullWidth ? 0 : 4,
          backgroundColor:
            type === 'text'
              ? undefined
              : (interpolateColors(
                  bgColorValue,
                  [0, 1],
                  [color, theme.COLORS.MUTED],
                ) as any),
        },
        { ...viewStyle },
      ]}
    >
      <Touchable
        {...props}
        onPress={disabled ? undefined : props.onPress}
        disabled={loading || disabled}
      >
        <View style={[styles.button]}>
          {loading && !icon && typeof children === 'string' ? (
            <ActivityIndicator
              color={type === 'text' ? color : theme.COLORS.WHITE}
            />
          ) : typeof children === 'string' ? (
            <>
              {loading ? (
                <ActivityIndicator
                  color={type === 'text' ? color : theme.COLORS.WHITE}
                />
              ) : (
                icon
              )}
              <Text
                color={type === 'text' ? color : theme.COLORS.WHITE}
                bold
                size={18}
                style={{ marginLeft: icon ? 8 : 0 }}
              >
                {children}
              </Text>
            </>
          ) : (
            children
          )}
        </View>
      </Touchable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 2,
    paddingHorizontal: 8,
    paddingVertical: 12,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
