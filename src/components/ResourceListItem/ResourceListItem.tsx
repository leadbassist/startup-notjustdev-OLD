import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { ResourceItem } from "../../types/models";
import Colors from "../../constants/Colors";
import { Ionicons, Entypo } from "@expo/vector-icons";
// import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

interface ResourceListItemProps {
  resource: ResourceItem;
  index: number;
  isLast?: boolean;
}

const ResourceListItem = ({
  resource,
  index,
  isLast,
}: ResourceListItemProps) => {
  const onPress = () => {
    // Linking.openURL(resource.url);
    WebBrowser.openBrowserAsync(resource.url);
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View
        style={[
          styles.indexContainer,
          resource.completed ? styles.completed : {},
        ]}
      >
        {resource.completed ? (
          <Entypo name="check" size={22} color={Colors.light.background} />
        ) : (
          <Text>{index + 1}</Text>
        )}
      </View>
      <Text>{resource.title}</Text>
      <Ionicons
        name="open-outline"
        size={24}
        color="black"
        style={styles.icon}
      />
      {!isLast && (
        <View
          style={[
            styles.lineIndicator,
            {
              backgroundColor: resource.completed
                ? Colors.light.primary
                : Colors.light.dark,
            },
          ]}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  indexContainer: {
    width: 30,
    borderRadius: 15,
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: Colors.light.dark,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
  icon: {
    marginLeft: "auto",
  },
  completed: {
    backgroundColor: Colors.light.primary,
    borderColor: Colors.light.primary,
  },
  lineIndicator: {
    position: "absolute",
    height: 20,
    width: 5,
    left: 12.5,
    top: 30,
    backgroundColor: Colors.light.primary,
  },
});

export default ResourceListItem;
