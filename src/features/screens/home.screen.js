import React from "react";
import { View, StatusBar, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const ParentView = styled(View)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`}px;
`;

const Tab = createBottomTabNavigator();

const Map = () => <Text> Map Screen </Text>;
const Home = () => <Text> Home Screen </Text>;
const Favorites = () => <Text> Favorites Screen </Text>;
const About = () => <Text> About Screen </Text>;

export const HomeScreen = () => (
  <>
    <ParentView>
      <Searchbar />
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
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

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="Map"
            component={Map}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="Favorites"
            component={Favorites}
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
