import { View, Text, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";

interface TopicSectionProps {
  title: string;
  display?: boolean;
}

const TopicSection = ({
  title,
  children,
  display = false,
}: PropsWithChildren<TopicSectionProps>) => {
  if (!display) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <>{children}</>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    marginBottom: 10,
    fontSize: 24,
    fontWeight: "500",
    letterSpacing: 1.1,
  },
});

export default TopicSection;
