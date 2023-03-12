import { TouchableOpacity, Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
        <Image source={imgUrl} resizeMode='contain' style={{with: 24, height: 24}} />
    </TouchableOpacity>
  );
};

export const RectButton = () => {
  return (
    <View>
      <Text>Circle Button</Text>
    </View>
  );
};
