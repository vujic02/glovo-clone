import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useContext, useLayoutEffect, useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import FeatherIcon from "react-native-vector-icons/Feather";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AppContext } from "../context";

type Props = {
  navigation: NavigationProp<any, any>;
};

const SignupScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const {
    setIsUserLoggedIn,
  }: {
    setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  } = useContext(AppContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        setIsUserLoggedIn(true);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <SafeAreaView className="relative w-full h-screen">
        {/* Header */}
        <View className="w-full h-8 flex flex-row justify-between px-6 mt-2">
          <AntDesignIcon
            name="arrowleft"
            size={24}
            color="#111"
            onPress={() => navigation.goBack()}
          />
          <Text
            className="text-glovoGreen text-semibold text-base"
            onPress={() => navigation.navigate("Login")}
          >
            Log in
          </Text>
        </View>

        {/* Heading text */}
        <View className="w-full flex flex-row justify-center mt-8">
          <Text className="text-3xl font-normal text-black">Sign up</Text>
        </View>

        {/* Input forms */}
        <View className="flex flex-col mt-16 w-full">
          <View className="w-full px-4">
            <View className="flex flex-row w-full justify-start items-center pl-4 pb-5 pr-16 border-b border-b-glovoGrayLight">
              <View className="-ml-4">
                <FeatherIcon name="mail" size={30} color="#6E6E6E" />
              </View>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                value={email}
                autoCorrect={false}
                placeholder="Email"
                keyboardType="email-address"
                className="border-none outline-none w-full ml-3 font-light text-xl text-glovoGrayLight"
              />
            </View>
          </View>

          <View className="w-full px-4 mt-8">
            <View className="flex flex-row w-full justify-start items-center pl-4 pb-5 pr-16 border-b border-b-glovoGrayLight">
              <View className="-ml-4">
                <FeatherIcon name="lock" size={30} color="#6E6E6E" />
              </View>
              <TextInput
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder="Password"
                secureTextEntry={!passwordShown}
                autoCorrect={false}
                className="border-none outline-none w-full ml-3 font-light text-xl text-glovoGrayLight tracking-tighter"
              />
              <View>
                {passwordShown ? (
                  <FeatherIcon
                    name="eye"
                    size={20}
                    onPress={() => setPasswordShown((prev) => !prev)}
                  />
                ) : (
                  <FeatherIcon
                    name="eye-off"
                    size={20}
                    onPress={() => setPasswordShown((prev) => !prev)}
                  />
                )}
              </View>
            </View>
          </View>

          <View className="w-full flex flex-row justify-center mt-8">
            <Text
              className="text-glovoGreen active:text-glovoGrayDark font-bold text-base"
              onPress={() => navigation.navigate("")}
            >
              Already have an account?
            </Text>
          </View>

          <View className="w-full flex flex-row justify-center mt-8">
            <TouchableHighlight
              underlayColor="#6E6E6E"
              disabled={email.length > 6 && password.length > 6 ? false : true}
              className={`mt-2 w-[75%] h-12 ${
                email.length > 6 && password.length > 3
                  ? "bg-glovoGreen"
                  : "bg-[#6E6E6E]"
              } flex justify-center items-center rounded-3xl`}
              onPress={() => signUp()}
            >
              <Text className=" text-white font-bold text-xl">Sign up</Text>
            </TouchableHighlight>
          </View>
        </View>

        {/* Bottom rectangle */}
        <View className="bg-yellow-500 w-full h-80 flex justify-center items-center absolute -bottom-[170px] overflow-hidden">
          <View className="w-[1000px] h-[500px] rounded-b-full bg-gray-100 absolute -top-[450px] overflow-hidden"></View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
