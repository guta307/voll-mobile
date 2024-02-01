import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, StatusBar } from "native-base";
import { Themes } from "./src/style/themes";
import Routes from "./src/routes";
export default function App() {
  return (
    <NativeBaseProvider theme={Themes}>
      <StatusBar backgroundColor={Themes.colors.blue[800]} />
      <Routes />
    </NativeBaseProvider>
  );
}
