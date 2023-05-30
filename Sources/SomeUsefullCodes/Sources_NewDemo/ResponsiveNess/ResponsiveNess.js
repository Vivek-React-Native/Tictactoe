import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

export {width, height};

export const isiPAD = height / width < 1.6;
export const isTablet = height / width < 1.6;

export const isIOS = Platform.OS == 'ios';
export const isAndroid = Platform.OS == 'android';

export function isIphoneXorAbove() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896)
  );
}
export const isX = isIphoneXorAbove();

export function wp(percentage) {
  const value = (percentage * width) / 100;
  return Math.round(value);
}

export function hp(percentage) {
  const value = (percentage * height) / 100;
  return Math.round(value);
}

// based on iphone 5s's scale
const scale = width / 375;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    if (isiPAD) {
      return Math.round(newSize) - wp(1);
    } else {
      return Math.round(newSize);
    }
  } else {
    if (isTablet) {
      return Math.round(newSize) - wp(1);
    } else {
      return Math.round(newSize);
    }
  }
}
