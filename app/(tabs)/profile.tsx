import React from "react";
import { Image, Text, View } from "react-native";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

const Profile = () => {
  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-1 absolute w-full z-0"
        resizeMode="cover"
      />
      <View className="flex-1 items-center justify-center ">
        <Image source={icons.person} className="size-10 " resizeMode="cover" />
        <Text className="text-white text-2xl font-bold">Profile</Text>
      </View>
    </View>
  );
};

export default Profile;
