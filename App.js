import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { HomeScreen } from "./src/features/screens/home.screen";

export default function App() {
  return (
    <>
      <HomeScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
