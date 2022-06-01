import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants';

export const Button = () => {
  return (
    <View>
      <Text>Button</Text>
    </View>
  );
};

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        minWidth: minWidth,
        padding: SIZES.small,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: 'center',
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
