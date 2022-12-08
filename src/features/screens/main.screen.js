import React from "react";
import { Text, SafeAreaView, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import FavoritesScreen from "./favorites.screen";
import MapScreen from "./map.screen";
import HomeScreen from "./home.screen";
import AboutScreen from "./about.screen";
import { StyledView } from "../../infrastracture/styles/view.style";
import styled from "styled-components/native";

const ParentView = styled.View`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`}px;
`;

const Tab = createBottomTabNavigator();

export const MainScreen = () => (
  <>
    <ParentView>
      <SafeAreaView>
        <StyledView>
          <Searchbar />
        </StyledView>
      </SafeAreaView>
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
            component={AboutScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ParentView>
  </>
);
