import { useState } from "react";
import { Text, TextInput, View } from "react-native";

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

export function StandardTextFormatter(string: string): string {
  return string.toUpperCase();
}

const labelStyle = {
  fontSize: 14,
  fontWeight: "500" as const,
  color: "#374151",
  marginBottom: 6,
};

export function StandardTextInput({
  formatter = StandardTextFormatter,
  label,
  placeholder = "Enter text...",
}: {
  formatter?: (string: string) => string;
  label?: string;
  placeholder?: string;
} = {}) {
  const [value, setValue] = useState("");

  const handleChangeText = (text: string) => {
    const formatted = formatter(text);
    setValue(formatted);
  };

  return (
    <View style={{ marginTop: 16, width: 300 }}>
      {label != null ? (
        <Text style={labelStyle}>{label}</Text>
      ) : null}
      <TextInput
        style={textFieldStyle}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        value={value}
        onChangeText={handleChangeText}
      />
    </View>
  );
}
