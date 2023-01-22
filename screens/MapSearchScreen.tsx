import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { API_KEY } from "@env";
import { AppContext } from "../context";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

type Props = {
  navigation: NavigationProp<any, any>;
};

const MapSearchScreen = ({ navigation }: Props) => {
  const { setLocation } = useContext(AppContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="w-full h-full bg-white">
      <SafeAreaView className="w-full h-full">
        <View className="flex flex-row w-full h-full relative">
          <View className="px-2 mt-3" onTouchEnd={() => navigation.goBack()}>
            <Icon name="arrow-left" size={24} color="#111" />
          </View>
          <GooglePlacesAutocomplete
            styles={styles}
            renderLeftButton={() => (
              <View className="h-full absolute top-3 left-2 z-10">
                <Icon name="search" size={24} color="#6E6E6E" />
              </View>
            )}
            placeholder="Search street, city, district..."
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            query={{
              key: API_KEY,
              language: "en",
            }}
            fetchDetails={true}
            enablePoweredByContainer={false}
            minLength={2}
            onPress={(data, details) => {
              setLocation(details?.geometry.location);
              navigation.navigate("Map");
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MapSearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    flexDirection: "row",
  },
  textInput: {
    backgroundColor: "#F5F5F5",
    height: 50,
    borderRadius: 9999,
    paddingVertical: 10,
    paddingHorizontal: 40,
    fontSize: 20,

    flex: 1,
    width: "90%",
  },
  poweredContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopWidth: 0.5,
  },
  powered: {},
  listView: {},
  row: {
    backgroundColor: "#FFFFFF",
    padding: 13,
    height: 47,
    flexDirection: "row",
  },
  separator: {
    height: 0.2,
    backgroundColor: "#fff",
  },
  description: {
    fontSize: 17,
  },
  loader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 20,
  },
});
