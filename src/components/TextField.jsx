import React from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

const TextField = ({
    placeholder,
    value,
    onChangeText,
    onFocus,
    onBlur,
    isPassword = false,
    showPassword,
    toggleShowPassword,
    error,
}) => {
    return (
        <>
            <View
                style={[
                    styles.inputContainer,
                ]}
            >
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={isPassword && !showPassword}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
                {isPassword && (
                    <TouchableOpacity
                        onPress={toggleShowPassword}
                        style={styles.eyeIcon}
                    >
                        <Image
                            source={
                                showPassword
                                    ? require('../assets/icons/eye-hide.png')
                                    : require('../assets/icons/eye.png')
                            }
                            style={{ width: 30, height: 24 }}
                        />
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.errorTextContainer}>
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>
            <View style={styles.gap}></View>
        </>
    );
};

export default TextField;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    input: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        color: '#333',
    },
    eyeIcon: {
        padding: 10,
    },
    errorTextContainer: {
        alignSelf: 'flex-start',
        marginLeft: 3,
    },
    errorText: {
        color: "red",
        fontSize: 12,
    },
    gap: {
        height: 20,
    },
});
