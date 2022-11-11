import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import correctTick from "../../../assets/images/tick.png";
import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image
          source={correctTick}
          resizeMode={"contain"}
          style={styles.image}
        />
      </View>
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.someMoreText}>
        Information about the user will be here
      </Text>

      <View style={styles.buttonContainer}>
        <CustomButton text="Sign out" type="TERTIARY" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  name: {
    fontSize: 30,
    margin: 10,
    fontWeight: "500",
  },
  someMoreText: {
    fontSize: 20,
  },
  avatar: {
    backgroundColor: "#EFEED0",
    width: 150,
    height: 150,
    borderRadius: 100,
    padding: 10,
    marginVertical: 25,
  },
  image: {
    width: "100%",
    flex: 1,
  },
  buttonContainer: {
    marginTop: "auto",
    alignSelf: "stretch",
    paddingHorizontal: 10,
  },
});

export default ProfileScreen;
