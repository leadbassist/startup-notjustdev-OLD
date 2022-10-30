import { View, Text } from "react-native";
import React from "react";

interface TopicNodesRowProps {
  children: React.ReactNode;
}

const TopicNodeRow = ({ children }: TopicNodesRowProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        // backgroundColor: "blue",
        justifyContent: "center",
      }}
    >
      {children}
    </View>
  );
};

export default TopicNodeRow;
