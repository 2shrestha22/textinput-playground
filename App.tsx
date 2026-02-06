import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ReanimatedTextInput, TextFormatter } from "./SyncTextInputValidation";
import { StandardTextInput, StandardTextFormatter } from "./StandardTextInput";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ReanimatedTextInput
        textFormatter={TextFormatter}
        label="Reanimated (UI thread)"
      />
      <StandardTextInput
        formatter={StandardTextFormatter}
        label="Standard (JS thread)"
      />
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
