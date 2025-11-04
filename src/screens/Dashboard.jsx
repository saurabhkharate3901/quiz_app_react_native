import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, SafeAreaView, ScrollView, Image, TouchableWithoutFeedback } from "react-native";
import questionsData from "../data/questions";
import { useDispatch, useSelector } from "react-redux";
import TextField from "../components/TextField";
import HeaderBar from "../components/HeaderBar";

const Dashboard = ({ navigation }) => {
    const dispatch = useDispatch();
    const { username } = useSelector((state) => state.auth);
    const { score, questions, subject } = useSelector((state) => state.quiz);
    const subjects = Object.keys(questionsData);
    const [search, setSearch] = useState("");
    const [searchFieldFocused, setSearchFieldFocused] = useState(false);
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleSearchFocused = () => { setSearchFieldFocused(true), setDropdownVisible(false); }
    const handleSearchdBlur = () => { setSearchFieldFocused(false) }
    const toggleDropdown = () => { setDropdownVisible((prev) => !prev); }

    const filteredSubjects = subjects.filter((subject) =>
        subject.toLowerCase().includes(search.toLowerCase())
    );

    const handleLogout = () => {
        navigation.navigate("Login")
    };

    const handleScreenPress = () => {
        setDropdownVisible(false);
    };

    return (
        <TouchableWithoutFeedback onPress={handleScreenPress}>
            <SafeAreaView style={styles.container}>
                <HeaderBar
                    title={`Welcome ${username}`}
                    onLogout={handleLogout}
                    showDropdown={toggleDropdown}
                    toggleDropdown={toggleDropdown}
                    isDropdownVisible={isDropdownVisible}
                    logoutIcon={true}
                />
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.dashboardImage}>
                        <Image
                            source={require("../assets/images/quize2.webp")}
                            style={styles.image}
                        />
                    </View>

                    <View style={styles.subjects}></View>
                    <Text style={styles.score}>
                        {`You scored ${score} out of ${questions} in the ${subject} quiz.`}
                    </Text>
                    <Text style={styles.categoriesSearch}>Search Subject</Text>
                    <TextField
                        placeholder="Search Subject"
                        value={search}
                        onChangeText={setSearch}
                        onFocus={handleSearchFocused}
                        onBlur={handleSearchdBlur}
                        isFocused={searchFieldFocused}
                    />
                    <Text style={styles.categoriesChoose}>Choose a Subject</Text>
                    {filteredSubjects.length > 0 ? (
                        <FlatList
                            data={filteredSubjects}
                            keyExtractor={(item, index) => index.toString()}
                            style={styles.flatListContainer}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.flatlistItem}
                                    onPress={() => navigation.navigate("QuizScreen", { subject: item })}
                                >
                                    <Text style={styles.buttonText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    ) : (
                        <Text style={styles.noResultText}>No subjects found</Text>
                    )}
                </ScrollView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        padding: 20,
        rowGap: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    categoriesSearch: {
        fontSize: 15,
    },
    categoriesChoose: {
        fontSize: 15,

    },
    score: {
        fontSize: 17,
        fontWeight: "bold",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    dashboardImage: {
        width: 328,
        height: 129,
        backgroundColor: "red",
        alignSelf: "center",
        borderRadius: 10
    },
    image: {
        width: 328,
        height: 129,
        borderRadius: 8,
    },
    subjects: {
        height: 1,
    },
    flatListContainer: {
        paddingBottom: 20,
    },
    flatlistItem: {
        width: 320,
        height: 58,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
        alignSelf: "center",
        borderRadius: 6,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        borderLeftWidth: 4,
        borderLeftColor: '#808080',
    },
    buttonText: {
        fontSize: 16,
    },
    noResultText: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 16,
        color: "#999",
    },
    logoutIcon: {
        width: 25,
        height: 25,
    },
    dropdown: {
        position: "absolute",
        top: 50,
        right: 20,
        backgroundColor: "#fff",
        borderRadius: 6,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        padding: 2,
        zIndex: 1
    },
    dropdownItem: {
        padding: 10,
    },
    dropdownText: {
        fontSize: 16,
    },
});


export default Dashboard;
