import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

const CustomButton = ({ title, handlePress, submit }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.ButtonContainer, submit && styles.disabledButton]}
                onPress={handlePress}
                disabled={submit}
            >
                {submit ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) : (
                    <Text style={styles.ButtonText}>{title}</Text>
                )}
            </TouchableOpacity>
        </View>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    ButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffa500',
        height: 40,
        width: 321,
        borderRadius: 5,
    },
    disabledButton: {
        backgroundColor: '#d3a04c', 
    },
    ButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '500',
    },
});
