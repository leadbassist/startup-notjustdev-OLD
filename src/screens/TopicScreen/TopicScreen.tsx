import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import ResourceListItem from "../../components/ResourceListItem";
import topics from "../../../assets/data/topics";
import { RootStackScreenProps } from "../../types/navigation";
import Markdown from "react-native-markdown-display";
import TopicSection from "./TopicSection";

const TopicScreen = ({ route, navigation }: RootStackScreenProps<"Topic">) => {
  const topicId = route.params.id;

  const topic = topics.find((t) => t.id === topicId); // this will find the topic's "id"

  if (topic) {
    navigation.setOptions({ title: topic.title });
  }

  return (
    <ScrollView style={styles.container}>
      <TopicSection title="Intro" display={!!topic?.description}>
        <Markdown>{topic?.description}</Markdown>
      </TopicSection>

      <TopicSection title="Resources" display={!!topic?.resources}>
        {topic?.resources?.map((resource, index) => (
          <ResourceListItem
            key={resource.id}
            resource={resource}
            index={index}
            isLast={index + 1 === topic.resources.length}
          />
        ))}
      </TopicSection>

      <TopicSection title="Context" display={!!topic?.context}>
        <Markdown>{topic?.context}</Markdown>
      </TopicSection>

      <TopicSection title="Practice" display={!!topic?.exercises}>
        {topic?.exercises?.map((resource, index) => (
          <ResourceListItem
            key={resource.id}
            resource={resource}
            index={index}
            isLast={index + 1 === topic.resources.length}
          />
        ))}
      </TopicSection>

      {/* <ResourceListItem /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    flex: 1,
    padding: 10,
  },
});

export default TopicScreen;
