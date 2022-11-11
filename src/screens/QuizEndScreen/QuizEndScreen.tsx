import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { RootStackScreenProps } from "../../types/navigation";
import correctTick from "../../../assets/images/tick.png";
import wrongTick from "../../../assets/images/wrongtick.png";
import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";
import Navigation from "../../navigation";

const happyText = "Woohoo! You passed the quiz!";
const sadText = "Oh no! Try again. Practice makes perfect!";

const QuizEndScreen = ({
  route,
  navigation,
}: RootStackScreenProps<"QuizEndScreen">) => {
  const { nofQuestions, nofCorrectAnswers } = route.params;

  const percentage = (nofCorrectAnswers / nofQuestions) * 100;
  const isHappy = percentage > 70;

  const motivationalText = isHappy ? happyText : sadText;

  const onPress = () => {
    navigation.navigate("Root");
  };

  return (
    <View style={styles.container}>
      {/* <Image
        source={isHappy ? correctTick : wrongTick}
        resizeMode={"contain"}
        style={styles.image}
      /> */}
      <Text style={styles.motivationalText}>{motivationalText}</Text>
      <Text
        style={[
          styles.title,
          { color: isHappy ? Colors.light.primary : Colors.light.secondary },
        ]}
      >
        {percentage}%
      </Text>
      <Text style={styles.subtitle}>
        {nofCorrectAnswers} / {nofQuestions}
      </Text>
      <View style={styles.buttonContainer}>
        <CustomButton text="Continue" onPress={onPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.light.background,
    // backgroundColor: "yellow",
    padding: 10,
  },
  image: {
    width: "30%",
    // height: 200,
    aspectRatio: 2 / 3,
    // backgroundColor: "green",
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    marginVertical: 20,
    // backgroundColor: "grey",
  },
  subtitle: {
    fontSize: 30,
    fontWeight: "500",
    marginBottom: "auto",
    // backgroundColor: "blue",
    color: "#666",
  },
  motivationalText: {
    fontSize: 20,
    color: "#666",
  },
  buttonContainer: {
    alignSelf: "stretch",
  },
});

export default QuizEndScreen;
