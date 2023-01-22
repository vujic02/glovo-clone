import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { NavigationProp } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";

type Props = {
  navigation: NavigationProp<any, any>;
};

const AuthScreen = ({ navigation }: Props) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="relative h-screen">
      {/* Top rounded rectangle */}
      <View className="bg-yellow-500 w-full h-80 flex justify-center items-center relative">
        <Image
          className="w-[90%] h-32"
          resizeMode={"cover"}
          source={require("../assets/images/glovo-logo2-transparent.png")}
        ></Image>
        <View className="w-[1000px] h-[500px] rounded-t-full bg-gray-100 absolute -bottom-[440px] overflow-hidden"></View>
      </View>

      {/* Facebook button */}
      <View className="w-full flex flex-col items-center mt-4">
        <Text className="text-glovoGrayDark font-normal text-base">
          Continue with
        </Text>
        <TouchableHighlight
          underlayColor="#c1c1c1"
          className="mt-2 w-[75%] h-12 bg-[#0F78F0]  flex justify-center items-center rounded-3xl"
          onPress={() => {}}
        >
          <View className="flex flex-row justify-center items-center">
            <Icon name="facebook-square" size={30} color="#fff" />
            <Text className="ml-4 text-white font-bold text-xl">Facebook</Text>
          </View>
        </TouchableHighlight>
      </View>

      {/* Sign up / Log in text */}
      <View className="w-full mt-24 flex flex-col items-center">
        <Text
          onPress={() => navigation.navigate("Signup")}
          className="text-glovoGreen active:text-green-500 text-base font-semibold"
        >
          Sign up
        </Text>
        <Text className="mt-4 text-glovoGrayDark text-base font-light">
          Have an account already?{" "}
          <Text
            onPress={() => {
              navigation.navigate("Login");
            }}
            className="ml-2 text-glovoGreen active:text-green-500 text-base font-semibold"
          >
            Log in
          </Text>
        </Text>
      </View>

      {/* Privacy policy footer */}
      <View className="absolute bottom-2 w-full flex flex-row justify-center">
        <Text className="text-center text-sm font-normal text-glovoGrayDark">
          By continuing, you automatically accept our{" "}
          <Text className="underline">Terms & Conditions,</Text>
          <Text className="underline">Privacy Policy</Text> and{" "}
          <Text className="underline">Cookies policy</Text>
        </Text>
      </View>
    </View>
  );
};

const mystyles = StyleSheet.create({});

export default AuthScreen;
