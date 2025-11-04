import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import { useSelector } from "react-redux";

const ResultScreen = ({route,navigation }) => {
  // const { score, questions } = route.params;
  const { score,questions } = useSelector((state) => state.quiz);
  const [isSubmiting, setSubmiting] = useState(false)
  
  const goToDashboard = () => {
    setSubmiting(true)
    setTimeout(() => {
      navigation.navigate("Dashboard")
      setSubmiting(false)
    }, 1000)
  }

  return (
    < View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Quiz Completed!</Text>
        <Text style={styles.score}>
          Your Score: {score} / {questions}
        </Text>
      </View>
      <View style={styles.mainContainer2}>
        <CustomButton
          title="Go to Dashboard"
          handlePress={goToDashboard}
          submit={isSubmiting}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa500'
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer2: {
    // flex: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color : "#fff"
  },
  score: {
    fontSize: 19,
    color : "#fff"
  },
});

export default ResultScreen;
