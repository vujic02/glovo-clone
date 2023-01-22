import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { NavigationProp } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/Feather";
import { AppContext } from "../context";
import * as Location from "expo-location";

type Props = {
  navigation: NavigationProp<any, any>;
};

const MapScreen = ({ navigation }: Props) => {
  const {
    location,
    setLocation,
  }: { location: { lat: number; lng: number } | null; setLocation: any } =
    useContext(AppContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      animation: "slide_from_bottom",
    });
  }, []);

  return (
    <View className="h-full w-full relative">
      <MapView
        className="absolute top-0 left-0 h-[50%] w-full"
        mapType="mutedStandard"
        initialRegion={{
          latitude: location !== null ? location.lat : 44.7,
          longitude: location !== null ? location.lng : 20.5,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        region={{
          latitude: location !== null ? location.lat : 44.7,
          longitude: location !== null ? location.lng : 20.5,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.lat,
              longitude: location.lng,
            }}
            title="Your home"
            identifier="origin"
          />
        )}
      </MapView>
      <View className="absolute bottom-0 left-0 h-[55%] w-full bg-gray-100 rounded-t-[20px] flex flex-col">
        <View className="w-full justify-center items-center my-4">
          <View className="w-10 h-1.5 bg-[#c4c4c4] rounded-md"></View>
        </View>
        <View className="flex justify-center items-center mt-4">
          <Text className="text-2xl font-semibold">Add a delivery address</Text>
          <View className="mt-6 w-[85%] flex flex-row justify-center items-center px-2 py-2 bg-zinc-200 text-glovoGrayDark rounded-full">
            <Icon className="px-2" name="search" size={24} color="#6E6E6E" />
            <TextInput
              className="pl-3 text-xl font-normal overflow-hidden"
              placeholder="Search street, city, district..."
              onPressIn={() => {
                navigation.navigate("MapSearch");
              }}
            />
          </View>
        </View>
        <View className="flex flex-row justify-start items-center mt-6 mx-4">
          <TouchableHighlight
            underlayColor={`rgba(0,161,130,0.3)`}
            style={{ backgroundColor: "rgba(0,161,130,0.2)" }}
            className="flex justify-center items-center rounded-full p-1.5"
            onPress={async () => {
              let { status } =
                await Location.requestForegroundPermissionsAsync();
              if (status !== "granted") {
                return;
              }

              let coords = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.Balanced,
                timeInterval: 5,
              });
              setLocation({
                lat: coords.coords.latitude,
                lng: coords.coords.longitude,
              });
            }}
          >
            <Icon name="send" size={24} color="#00A182" />
          </TouchableHighlight>
          <Text
            className="ml-2 text-glovoGreen font-bold text-base"
            onPress={async () => {
              let { status } =
                await Location.requestForegroundPermissionsAsync();
              if (status !== "granted") {
                return;
              }

              let coords = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.Balanced,
                timeInterval: 5,
              });
              setLocation({
                lat: coords.coords.latitude,
                lng: coords.coords.longitude,
              });
            }}
          >
            Use current location
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
