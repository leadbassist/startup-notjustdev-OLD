import { View, Text, StyleSheet, Image, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../../constants/Colors";
import quiz from "../../../assets/data/quiz";
import Markdown from "react-native-markdown-display";
import QuizChoices from "../../components/QuizChoices";
import CustomButton from "../../components/CustomButton";
import ProgressBar from "../../components/ProgressBar";
import { RootStackScreenProps } from "../../types/navigation";

// const question = quiz[0];

const QuizScreen = ({ navigation }: RootStackScreenProps<"Quiz">) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [question, setQuestion] = useState(quiz[questionIndex]);
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<
    boolean | undefined
  >(undefined);

  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);

  useEffect(() => {
    if (questionIndex === quiz.length) {
      //navigate to results screen
      navigation.navigate("QuizEndScreen", {
        nofQuestions: quiz.length,
        nofCorrectAnswers: numberOfCorrectAnswers,
      });

      // Alert.alert(
      //   "Quiz finished",
      //   `You answered ${numberOfCorrectAnswers} out of ${quiz.length} questions correctly`
      // );
      return;
    }

    setQuestion(quiz[questionIndex]);
    setAnsweredCorrectly(undefined);
    setSelectedAnswer([]);
  }, [questionIndex]);

  const onChoicePress = (choice) => {
    setSelectedAnswer((currentSelectedAnswers) => {
      if (currentSelectedAnswers.includes(choice)) {
        return currentSelectedAnswers.filter((answer) => answer !== choice);
      } else {
        if (question.correctAnswers.length > 1) {
          return [...currentSelectedAnswers, choice];
        } else {
          return [choice];
        }
      }
    });
  };

  const onContinue = () => {
    setQuestionIndex((index) => index + 1);
  };

  const onSubmit = () => {
    if (selectedAnswer.length !== question.correctAnswers.length) {
      setAnsweredCorrectly(false);
      return;
    }
    const isCorrect = question.correctAnswers.every((answer) =>
      selectedAnswer.includes(answer)
    );
    setAnsweredCorrectly(isCorrect);
    if (isCorrect) {
      setNumberOfCorrectAnswers((n) => n + 1);
    }
  };

  // console.log(answeredCorrectly());

  const isButtonDisabled = selectedAnswer.length === 0;

  return (
    <>
      <ProgressBar progress={questionIndex / quiz.length} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.question}>{question.question}</Text>
        {!!question.image && (
          <Image
            source={{
              uri: question.image,
            }}
            style={styles.questionImage}
            resizeMode={"contain"}
          />
        )}

        {!!question.content && <Markdown>{question.content}</Markdown>}

        {/* choices */}
        <View style={styles.choicesContainer}>
          {question.choices.map((choice) => (
            <QuizChoices
              key={choice}
              choice={choice}
              onPress={onChoicePress}
              isSelected={selectedAnswer.includes(choice)}
              disabled={answeredCorrectly !== undefined}
            />
          ))}
        </View>

        {/* button */}
        <CustomButton
          text="Submit"
          onPress={onSubmit}
          disabled={isButtonDisabled}
        />
      </ScrollView>
      {answeredCorrectly === true && (
        <View style={[styles.answerBox, styles.correctAnswerBox]}>
          <Text style={styles.correctTitle}>Continue</Text>
          <CustomButton text="Continue" onPress={onContinue} />
        </View>
      )}
      {answeredCorrectly === false && (
        <View style={[styles.answerBox, styles.wrongAnswerBox]}>
          <Text style={styles.wrongTitle}>Wrong</Text>
          <CustomButton text="Continue" onPress={onContinue} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backGroundColor: Colors.light.background,
    padding: 10,
    minHeight: "100%",
  },
  question: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 10,
  },
  questionImage: {
    width: "100%",
    height: 200,
  },
  choicesContainer: {
    marginTop: "auto",
  },
  answerBox: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 10,
    width: "100%",
    borderWidth: 2,
    borderBottomWidth: 0, // will NOT show border at bottom
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  correctAnswerBox: {
    borderColor: Colors.light.primary,
    backgroundColor: Colors.light.background,
  },
  wrongAnswerBox: {
    borderColor: Colors.light.secondary,
    backgroundColor: Colors.light.backgroundError,
  },
  correctTitle: {
    fontSize: 16,
    color: Colors.light.primary,
    fontWeight: "bold",
    marginVertical: 10,
  },
  wrongTitle: {
    fontSize: 16,
    color: Colors.light.secondary,
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default QuizScreen;
