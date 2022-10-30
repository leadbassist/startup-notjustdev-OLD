import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { Topic } from "../../types/models";

interface TopicNodeProps {
  topic: Topic;
  isDisabled?: boolean;
}

const TopicNode = ({ topic, isDisabled = true }: TopicNodeProps) => {
  return (
    <View style={styles.container}>
      {/*image */}
      <View style={styles.progress}>
        <View
          style={[
            styles.circle,
            {
              backgroundColor: isDisabled
                ? Colors.light.dark
                : Colors.light.primary,
            },
          ]}
        >
          <Image
            source={{
              uri: topic.icon,
            }}
            style={styles.image}
          />
        </View>
      </View>

      <Text style={styles.title}>{topic.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // backgroundColor: "red",
    margin: 10,
    width: "30%",
    maxWidth: 150, // to ensure it doesnt go over a certain size no matter how big the screen is
  },
  progress: {
    backgroundColor: Colors.light.dark,
    padding: 10,
    borderRadius: 999,
  },
  circle: {
    width: 100,
    aspectRatio: 1, // "1" means "height" will be proportional to width
    borderRadius: 50,
    backgroundColor: Colors.light.tertiary,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: Colors.light.background,
  },
  image: {
    width: "65%",
    aspectRatio: 1,
  },
  title: {
    marginVertical: 5,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default TopicNode;
