import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { HomeScreen } from "./src/features/screens/home.screen";
import { WelcomeScreen } from "./src/features/screens/welcome.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen">
          <Stack.Screen
            options={{ headerShown: false }}
            name="WelcomeScreen"
            component={WelcomeScreen}
          />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
        <ExpoStatusBar style="auto" />
      </NavigationContainer>
    </>
  );
}
