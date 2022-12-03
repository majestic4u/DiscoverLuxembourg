import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { WelcomeScreen } from "./src/features/screens/welcome.screen";

export default function App() {
  return (
    <>
      <WelcomeScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
