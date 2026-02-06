import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ReanimatedTextInput, TextFormatter } from "./SyncTextInputValidation";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ReanimatedTextInput textFormatter={TextFormatter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
