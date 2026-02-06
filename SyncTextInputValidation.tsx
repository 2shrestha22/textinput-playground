import { TextInput } from "react-native";
import Animated, {
  dispatchCommand,
  useAnimatedRef,
  useEvent,
  useHandler,
} from "react-native-reanimated";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export function ReanimatedTextInput({
  textFormatter,
}: {
  textFormatter: (string: string) => string;
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
    <AnimatedTextInput
      style={{
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
        marginTop: 100,
      }}
      placeholder="Enter text..."
      placeholderTextColor="#9ca3af"
      onChange={textInputHandler}
      ref={animatedRef}
    />
  );
}

export function TextFormatter(string: string) {
  "worklet";
  return string.toUpperCase();
}
