import React from 'react';
import {
  Dimensions,
  PixelRatio,
  Text as ReactNativeText,
  TextProps,
} from 'react-native';
import { useUI } from './context/UIContext';

const pixelRatio = PixelRatio.get();
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

/**
 * Gets the actual layout size of the text
 */
export const normalise = (size: number) => {
  if (pixelRatio >= 2 && pixelRatio < 3) {
    // iphone 5s and older Androids
    if (deviceWidth < 360) {
      return size * 0.95;
    }
    // iphone 5
    if (deviceHeight < 667) {
      return size;
      // iphone 6-6s
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.15;
    }
    // older phablets
    return size * 1.25;
  }
  if (pixelRatio >= 3 && pixelRatio < 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size;
    }
    // Catch other weird android width sizings
    if (deviceHeight < 667) {
      return size * 1.15;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.2;
    }
    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note 等等
    return size * 1.27;
  }
  if (pixelRatio >= 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size;
      // Catch other smaller android height sizings
    }
    if (deviceHeight < 667) {
      return size * 1.2;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.25;
    }
    // catch larger phablet devices
    return size * 1.4;
  }
  return size;
};

export default function Text(
  props: TextProps & {
    bold?: boolean;
    color?: string;
    size?: number;
    children: any;
    h5?: boolean;
    h4?: boolean;
    h3?: boolean;
    h2?: boolean;
    h1?: boolean;
    muted?: boolean;
  },
) {
  const { theme } = useUI();
  const color =
    props.color || (props.muted ? theme.COLORS.MUTED : theme.COLORS.TEXT);
  const fontSize = props.size
    ? props.size
    : props.h5
    ? normalise(18)
    : props.h4
    ? normalise(24)
    : props.h3
    ? normalise(30)
    : props.h2
    ? normalise(38)
    : props.h1
    ? normalise(44)
    : undefined;
  const fontWeight = props.bold ? 'bold' : undefined;

  return (
    <ReactNativeText
      {...props}
      style={[{ color, fontSize, fontWeight }, props.style]}
    />
  );
}
