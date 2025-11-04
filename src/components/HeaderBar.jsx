import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const HeaderBar = ({
    title,
    onLogout,
    toggleDropdown,
    isDropdownVisible,
    logoutIcon=false
}) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
            {logoutIcon && 
                <TouchableOpacity onPress={toggleDropdown}>
                    <Image
                        source={require("../assets/icons/logout.png")}
                        style={styles.logoutIcon}
                    />
                </TouchableOpacity>}
            </View>
            {isDropdownVisible && (
                <View style={styles.dropdown}>
                    <TouchableOpacity onPress={onLogout} style={styles.dropdownItem}>
                        <Text style={styles.dropdownText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#fff",
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
    },
    logoutIcon: {
        width: 25,
        height: 25,
    },
    dropdown: {
        position: "absolute",
        top: 47,
        right: 15,
        backgroundColor: "#fff",
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        zIndex: 1,
    },
    dropdownItem: {
        padding: 10,
    },
    dropdownText: {
        fontSize: 16,
    },
});

export default HeaderBar;
