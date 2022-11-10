import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

interface MultipleChoiceAnswerProps extends PressableProps {
  choice: string;
  isSelected?: boolean;
  onPress?: (arg0: string) => void;
}

const QuizChoices = ({
  choice,
  isSelected = false,
  onPress = () => {},
  ...otherProps
}: MultipleChoiceAnswerProps) => {
  return (
    <Pressable
      onPress={() => onPress(choice)}
      style={[
        styles.container,
        isSelected ? { borderColor: Colors.light.primary } : {},
      ]}
      {...otherProps}
    >
      <Text
        style={[styles.text, isSelected ? { color: Colors.light.primary } : {}]}
      >
        {choice}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.light.tabIconDefault,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  text: {
    color: Colors.light.text,
  },
});

export default QuizChoices;
