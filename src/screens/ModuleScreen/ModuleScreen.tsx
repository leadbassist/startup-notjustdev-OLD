import { View, Text, StyleSheet, FlatList } from "react-native";
import TopicNode from "../../components/TopicNode";
import TopicNodeRow from "../../components/TopicNodeRow";
import topics from "../../../assets/data/topics";
import { groupByLevel, getCurrentActiveLevel } from "../../utils/topics";

const levels = groupByLevel(topics);
const currentLevel = getCurrentActiveLevel(levels);
console.log(currentLevel);

const ModuleScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={levels}
        renderItem={({ item }) => (
          <TopicNodeRow>
            {item.map((topic) => (
              <TopicNode
                key={topic.id}
                topic={topic}
                isDisabled={currentLevel < topic.level}
              />
            ))}
          </TopicNodeRow>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default ModuleScreen;
