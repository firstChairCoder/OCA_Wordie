import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_800ExtraBold,
  useFonts
} from "@expo-google-fonts/nunito";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import AppNavigator from "./src/navigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: Nunito_400Regular,
    SemiBold: Nunito_600SemiBold,
    ExtraBold: Nunito_800ExtraBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AppNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
