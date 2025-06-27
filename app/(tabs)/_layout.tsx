import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 20,
          height: 52,
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.home} label="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.search} label="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="save"
        options={{
          headerShown: false,
          title: "Save",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.save} label="Save" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.person} label="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}

function TabBarIcon({ focused, icon, label }: any) {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row items-center justify-center rounded-full  w-full min-w-[112px] min-h-16 mt-4 overflow-hidden"
      >
        <Image source={icon} className="size-5" tintColor={"#151312"} />
        <Text className="text-secondary text-base font-semibold ml-2">
          {label}
        </Text>
      </ImageBackground>
    );
  } else {
    return (
      <View className="size-full  items-center justify-center   w-full mt-4 rounded-full ">
        <Image source={icon} tintColor={"#A8B5D8"} className="size-5" />
      </View>
    );
  }
}
