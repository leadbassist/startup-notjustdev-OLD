import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { Topic } from "../../types/models";
import CircularProgress from "../CircularProgress/CircularProgress";
import { useNavigation } from "@react-navigation/native";
// import { Svg, Circle } from "react-native-svg";

interface TopicNodeProps {
  topic: Topic;
  isDisabled?: boolean;
}

const TopicNode = ({ topic, isDisabled = true }: TopicNodeProps) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const itemWidth = width / 3 - 30;

  const onPress = () => {
    navigation.navigate("Topic", { id: topic.id });
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={[styles.container, { width: itemWidth }]}
    >
      {/*image */}
      <View style={styles.progress}>
        <CircularProgress
          size={itemWidth}
          strokeWidth={8}
          progress={topic.progress}
        />
        <View
          style={[
            styles.circle,
            {
              width: itemWidth - 20,
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
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10,
    maxWidth: 150, // to ensure it doesnt go over a certain size no matter how big the screen is
  },
  progress: {
    width: "100%",
    aspectRatio: 1,
    justifyContent: "center",
  },
  circle: {
    alignSelf: "center",
    aspectRatio: 1, // "1" means "height" will be proportional to width
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
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
