import { Text, TextInput, View } from "react-native";
import Animated, {
  dispatchCommand,
  useAnimatedRef,
  useEvent,
  useHandler,
} from "react-native-reanimated";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const textFieldStyle = {
  height: 48,
  width: 300,
  paddingHorizontal: 16,
  paddingVertical: 12,
  borderColor: "#d1d5db",
  borderWidth: 1,
  borderRadius: 8,
  backgroundColor: "#fff",
  fontSize: 16,
  color: "#111827",
} as const;

const labelStyle = {
  fontSize: 14,
  fontWeight: "500" as const,
  color: "#374151",
  marginBottom: 6,
};

export function ReanimatedTextInput({
  textFormatter,
  label,
  placeholder = "Enter text...",
}: {
  textFormatter: (string: string) => string;
  label?: string;
  placeholder?: string;
}) {
  const animatedRef = useAnimatedRef();

  const handlers = {
    onChange: (event: any) => {
      "worklet";
      console.log("event", event);
    },
  };
  const { doDependenciesDiffer } = useHandler(handlers);

  const textInputHandler = useEvent(
    (event: any) => {
      "worklet";
      const { onChange } = handlers;
      if (onChange) {
        const textWithoutSpecialCharacters = textFormatter(event.text);
        if (textWithoutSpecialCharacters !== event.text) {
          dispatchCommand(animatedRef, "setTextAndSelection", [
            event.eventCount,
            textWithoutSpecialCharacters,
            -1,
            -1,
          ]);
        }
        onChange(event);
      }
    },
    ["onChange"],
    doDependenciesDiffer,
  );

  return (
    <View style={{ marginTop: 100, width: 300 }}>
      {label != null ? (
        <Text style={labelStyle}>{label}</Text>
      ) : null}
      <AnimatedTextInput
        style={textFieldStyle}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        onChange={textInputHandler}
        ref={animatedRef}
      />
    </View>
  );
}

export function TextFormatter(string: string) {
  "worklet";
  return string.toUpperCase();
}
