import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import ResourceListItem from "../../components/ResourceListItem";
import topics from "../../../assets/data/topics";
import { RootStackScreenProps } from "../../types/navigation";

const TopicScreen = ({ route, navigation }: RootStackScreenProps<"Topic">) => {
  const topicId = route.params.id;

  const topic = topics.find((t) => t.id === topicId); // this will find the topic's "id"

  if (topic) {
    navigation.setOptions({ title: topic.title });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resources</Text>

      {topic?.resources?.map((resource, index) => (
        <ResourceListItem
          key={resource.id}
          resource={resource}
          index={index}
          isLast={index + 1 === topic.resources.length}
        />
      ))}

      {/* <ResourceListItem /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 1.1,
  },
});

export default TopicScreen;
