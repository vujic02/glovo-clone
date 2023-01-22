import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { NavigationProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EIcon from "react-native-vector-icons/EvilIcons";
import IoIcon from "react-native-vector-icons/Ionicons";

type Props = {
  navigation: NavigationProp<any, any>;
};

const LocationScreen = ({ navigation }: Props) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="bg-yellow-500 h-[100%]">
      <SafeAreaView>
        {/* Header */}
        <View className="flex flex-row justify-between items-center my-4">
          <View className="bg-glovoYellowLight rounded-full opacity-80 p-1 ml-4 ">
            <MCIcon name="account-outline" size={36} color="#111" />
          </View>
          <View className="flex flex-row justify-between max-w-[250px] mt-4">
            <Text
              onPress={() => {
                navigation.navigate("Map");
              }}
              className="text-black font-semibold text-xl text-center break-words"
            >
              Please enter a delivery adress
            </Text>
            <IoIcon
              onPress={() => {
                navigation.navigate("Map");
              }}
              name="chevron-down-outline"
              size={36}
              color="#111"
            />
          </View>
          <View className="bg-glovoYellowLight rounded-full opacity-80 p-1 mr-4">
            <EIcon name="share-google" size={36} color="#111" />
          </View>
        </View>

        {/* Svg & Background */}
        <View className="w-full flex flex-row justify-center items-center relative mb-16">
          <Image
            className="w-[100%] h-96"
            resizeMode="contain"
            source={require("../assets/images/order-svg.png")}
          />
          <View className="-z-10 w-[80%] h-72 absolute bg-glovoYellowLight rounded-tl-[12000px] rounded-tr-[6000px] rounded-br-[7500px] rounded-bl-[4000px] opacity-80"></View>
        </View>

        {/* Button */}
        <View className="w-full flex flex-row justify-center">
          <TouchableHighlight
            underlayColor="#6E6E6E"
            className="mt-2 w-[80%] h-12 bg-glovoGreen flex justify-center items-center rounded-3xl"
            onPress={() => {}}
          >
            <Text className="text-white text-xl font-semibold">
              Use current location
            </Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({});
