import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <View style={styles.progressBarContainer}>
      <View
        style={[
          styles.progressBar,
          { width: `${Math.max(5, progress * 100)}%` },
        ]}
      />
      {/* <Text>ProgressBar</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    backgroundColor: Colors.light.background,
    height: 10,
  },
  progressBar: {
    backgroundColor: Colors.light.primary,
    height: "100%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default ProgressBar;
