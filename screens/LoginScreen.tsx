import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const LoginScreen = (props: Props) => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <View className="bg-yellow-500 w-full h-80 flex justify-center items-center relative">
        <Image className="w-[80%] h-20" resizeMode={"contain"} source={require("../assets/images/glovo-logo1-transparent.png")}></Image>
        <View className="w-[1000px] h-[500px] rounded-t-full bg-gray-100 absolute -bottom-[440px] overflow-hidden"></View>
      </View>
      <View>
        <Text>Test</Text>
      </View>
    </View>
  );
};

const mystyles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    backgroundColor: "#fff",

    elevation: 24,
  },
});

export default LoginScreen;
