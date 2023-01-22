import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { NavigationProp } from "@react-navigation/native";

type Props = {
  navigation: NavigationProp<any, any>;
  containerStyles: string;
  iconStyles: string;
  inputStyles: string;
};

const CustomInput = ({
  navigation,
  containerStyles,
  iconStyles,
  inputStyles,
}: Props) => {
  return (
    <View
      className={`${containerStyles} w-[85%] flex flex-row justify-center items-center px-2 py-2 bg-zinc-200 text-glovoGrayDark rounded-full`}
    >
      <Icon
        className={`${iconStyles} px-2`}
        name="search"
        size={24}
        color="#6E6E6E"
      />
      <TextInput
        className={`${inputStyles} pl-3 text-xl font-normal overflow-hidden`}
        placeholder="Search street, city, district..."
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
