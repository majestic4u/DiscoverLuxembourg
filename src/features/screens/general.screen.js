import React from "react";
import { View, StatusBar, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./home.screen";
import FavoritesScreen from "./favorites.screen";
import MapScreen from "./map.screen";

const ParentView = styled(View)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`}px;
`;

const Tab = createBottomTabNavigator();

const About = () => <Text> About Screen </Text>; // TO BE DELETED!

export const GeneralScreen = () => (
  <>
    <ParentView>
      <Searchbar />
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === "Map") {
                iconName = "md-map";
              } else if (route.name === "Favorites") {
                iconName = "md-heart";
              } else if (route.name === "About") {
                iconName = "md-information";
              } else if (route.name === "Home") {
                iconName = "md-home";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="Map"
            component={MapScreen}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="Favorites"
            component={FavoritesScreen}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="About"
            component={About}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ParentView>
  </>
);
