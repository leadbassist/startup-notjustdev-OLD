import {
  View,
  Text,
  StyleSheet,
  Pressable,
  PressableProps,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

interface CustomButtonProps extends PressableProps {
  text: string;
}

const CustomButton = ({
  text,
  style,
  disabled,
  ...otherProps
}: CustomButtonProps) => {
  return (
    <Pressable
      style={[
        styles.container,
        style as any,
        disabled && { backgroundColor: Colors.light.tabIconDefault },
      ]}
      disabled={disabled}
      {...otherProps}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.primary,
    padding: 10,
    marginVertical: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    color: Colors.light.background,
    fontSize: 20,
    fontWeight: "700",
  },
});

export default CustomButton;
