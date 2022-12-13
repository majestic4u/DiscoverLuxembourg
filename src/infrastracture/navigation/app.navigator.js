import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeScreen } from "../../features/screens/welcome.screen";

import { MainScreenNavigator } from "./main.screen.navigator";
import AttractionDetailsScreen from "../../features/screens/homescreen/attraction.details.screen";

const Stack = createNativeStackNavigator();

export const AppNavigator = () => (
  <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          options={{ headerShown: false }}
          name="WelcomeScreen"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MainScreen"
          component={MainScreenNavigator}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AttractionDetails"
          component={AttractionDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);
