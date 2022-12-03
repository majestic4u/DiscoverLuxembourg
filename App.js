import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { HomeScreen } from "./src/features/screens/home.screen";
import { WelcomeScreen } from "./src/features/screens/welcome.screen";

export default function App() {
  return (
    <>
      <HomeScreen />
      <WelcomeScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
