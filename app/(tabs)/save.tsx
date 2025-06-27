import React from "react";
import { Image, View } from "react-native";

import { images } from "@/constants/images";

const Save = () => {
  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-1 absolute w-full z-0"
        resizeMode="cover"
      />
    </View>
  );
};

export default Save;
