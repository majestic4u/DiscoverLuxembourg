import React from "react";
import { View, StatusBar, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const ParentView = styled.View`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`}px;
`;

const Tab = createBottomTabNavigator();

const Map = () => <Text> Map Screen </Text>;
const Favorites = () => <Text> Favorites Screen </Text>;
const About = () => <Text> About Screen </Text>;

export const HomeScreen = () => (
  <>
    <View>
      <Searchbar />
    </View>
    <ExpoStatusBar style="auto" />
    <ParentView>
      <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Favorites" component={Favorites} />
          <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
      </NavigationContainer>
    </ParentView>
  </>
);
