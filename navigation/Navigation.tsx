import React, { useContext } from "react";
import { AppContext } from "../context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AuthScreen,
  LocationScreen,
  LoginScreen,
  MapScreen,
  MapSearchScreen,
  SignupScreen,
} from "../screens";

type Props = {};

const Navigator = (props: Props) => {
  const Stack = createNativeStackNavigator();

  const { isUserLoggedIn }: { isUserLoggedIn: boolean } =
    useContext(AppContext);

  console.log(isUserLoggedIn ? "USER LOGGED IN" : "USER NOT LOGGED IN!!!!!!");

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {isUserLoggedIn ? (
            <Stack.Group>
              <Stack.Screen
                name="Location"
                component={LocationScreen}
              ></Stack.Screen>
              <Stack.Screen name="Map" component={MapScreen}></Stack.Screen>
              <Stack.Screen
                name="MapSearch"
                component={MapSearchScreen}
              ></Stack.Screen>
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen name="Auth" component={AuthScreen}></Stack.Screen>
              <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
              <Stack.Screen
                name="Signup"
                component={SignupScreen}
              ></Stack.Screen>
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigator;
