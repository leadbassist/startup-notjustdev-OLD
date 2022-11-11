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
  type?: "PRIMARY" | "SECONDARY" | "TERTIARY";
}

const CustomButton = ({
  text,
  style,
  disabled,
  type = "PRIMARY",
  ...otherProps
}: CustomButtonProps) => {
  const buttonStyle = styles[`container_${type}`];
  const textStyle = styles[`text_${type}`];

  return (
    <Pressable
      style={[
        styles.container,
        buttonStyle,
        style as any,
        disabled && { backgroundColor: Colors.light.tabIconDefault },
      ]}
      disabled={disabled}
      {...otherProps}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.light.primary,
    padding: 10,
    marginVertical: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  container_PRIMARY: {
    backgroundColor: Colors.light.primary,
  },
  container_SECONDARY: {
    borderWidth: 2,
    borderColor: Colors.light.primary,
  },
  container_TERTIARY: {},
  text: {
    color: Colors.light.background,
    fontSize: 20,
    fontWeight: "700",
  },
  text_PRIMARY: {},
  text_SECONDARY: {
    color: Colors.light.primary,
  },
  text_TERTIARY: {
    color: Colors.light.primary,
  },
});

export default CustomButton;
