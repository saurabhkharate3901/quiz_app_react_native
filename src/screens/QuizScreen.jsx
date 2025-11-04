import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import questionsData from "../data/questions";
import { useDispatch } from "react-redux";
import { numberOfQuestion, result, whichSubject } from "../redux/slice/quizSlice";
import HeaderBar from "../components/HeaderBar";

const QuizScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const { subject } = route.params;
    const questions = questionsData[subject];
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [timer, setTimer] = useState(15);
    const [intervalId, setIntervalId] = useState(null);

    const currentQuestion = questions[currentQuestionIndex];

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setSelectedOptions({
            ...selectedOptions,
            [currentQuestionIndex]: option,
        });
    };

    const updateScore = () => {
        let newScore = 0;
        for (let index in selectedOptions) {
            if (selectedOptions[index] === questions[index].answer) {
                newScore += 1;
            }
        }
        setScore(newScore);
        dispatch(result({ score: newScore }));
    };

    const changeIndex = () => {
        if (selectedOption !== selectedOptions[currentQuestionIndex]) {
            setSelectedOptions({
                ...selectedOptions,
                [currentQuestionIndex]: selectedOption,
            });
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimer(15);
        } else {
            updateScore();
            dispatch(numberOfQuestion({ questions: questions.length }));
            clearInterval(intervalId);
            navigation.navigate("ResultScreen", { score: score, questions: questions.length });
        }
    };

    const previousIndex = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setTimer(15);
        }
        updateScore();
    };

    const handleQuit = () => {
        navigation.goBack();
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    useEffect(() => {
        const initialSelectedOption = selectedOptions[currentQuestionIndex] || null;
        setSelectedOption(initialSelectedOption);
        updateScore();
    }, [currentQuestionIndex, selectedOptions]);

    useEffect(() => {
        dispatch(whichSubject({ subject: subject }));
    }, []);

    useEffect(() => {
        if (timer > 0) {
            const id = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            setIntervalId(id);
            return () => clearInterval(id);
        } else {
            changeIndex();
        }
    }, [timer]);

    return (
        <>
            <HeaderBar
                title={subject}
            />
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.time}>⏰ Time Left: {timer}s</Text>
                </View>
                <View style={styles.contain}>
                    <Text> Question :- {currentQuestionIndex + 1} / {questions.length}</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Text style={styles.quitText}>Quit</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.questionText}>
                    {currentQuestion.question}
                </Text>

                <View style={styles.optionsContainer}>
                    {currentQuestion.options.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.option,
                                selectedOption === option && styles.selectedOption,
                            ]}
                            onPress={() => handleOptionSelect(option)}
                        >
                            <Text
                                style={[
                                    styles.optionText,
                                    selectedOption === option && styles.selectedOptionText,
                                ]}
                            >
                                {option}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.navigationContainer}>
                    <TouchableOpacity
                        style={[
                            styles.navButton,
                            currentQuestionIndex === 0 && styles.disabledButton,
                        ]}
                        onPress={previousIndex}
                        disabled={currentQuestionIndex === 0}
                    >
                        <Text style={styles.navButtonText}>
                            Previous
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.navButton}
                        onPress={changeIndex}
                    >
                        <Text style={styles.navButtonText}>
                            {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
                        </Text>
                    </TouchableOpacity>
                </View>
                {modalVisible &&
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.modalOverlay}>
                            <View style={styles.modalContainer}>
                                <Text style={styles.modalText}>Are you sure you want to quit?</Text>
                                <View style={styles.modalButtons}>
                                    <TouchableOpacity style={styles.modalButton} >
                                        <Text style={styles.modalButtonText} onPress={handleCancel}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.modalButton} onPress={handleQuit}>
                                        <Text style={styles.modalButtonText}>Yes</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                }
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f8f8f8",
    },
    header: {
        alignItems: "center",
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10
    },
    time: {
        fontSize: 20,
        color: "red"
    },
    contain: {
        justifyContent: "space-between",
        flexDirection: "row",
        paddingRight: 10,
        marginBottom: 30,
    },
    quitText: {
        color: "red",
        fontWeight: "bold",
    },
    questionText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#000",
    },
    optionsContainer: {
        marginBottom: 30,
    },
    option: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        borderColor: "#ccc",
        borderWidth: 1,
        borderLeftWidth: 4,
    },
    selectedOption: {
        backgroundColor: "#ffa500",
    },
    optionText: {
        fontSize: 16,
        color: "#000",
    },
    selectedOptionText: {
        color: "#fff",
        fontWeight: "bold",
    },
    navigationContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 10
    },
    navButton: {
        backgroundColor: "#ffa500",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    disabledButton: {
        backgroundColor: "#ffcc80",
    },
    navButtonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
    },

    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    modalButton: {
        flex: 1,
        marginHorizontal: 10,
        padding: 8,
        borderRadius: 5,
        backgroundColor: '#ffa500',
        alignItems: 'center',
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default QuizScreen;