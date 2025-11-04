import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Alert, TouchableOpacity, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/slice/authSlice';
import CustomButton from '../components/CustomButton';
import TextField from '../components/TextField';
import { emailRegex, errorMessages, letter, nameRegex, numbers, onlyLatter, onlyNumbers, spcialChar } from '../constant/Constant';

const Login = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [usernameFocused, setUsernameFocused] = useState(false);
    const [emailFocused, setEmailFocud] = useState(false)
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmiting, setSubmiting] = useState(false)
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleTextFieldFocused = () => { setUsernameFocused(true) }
    const handleTextFieldBlur = () => { setUsernameFocused(false) }
    const handleEmailFocused = () => { setEmailFocud(true) }
    const handleEmailBlur = () => { setEmailFocud(false) }
    const handlePasswordFieldFocused = () => { setPasswordFocused(true) }
    const handlePasswordFieldBlur = () => { setPasswordFocused(false) }
    const togglePassword = () => { setShowPassword(!showPassword) }

    const validateAndLogin = () => {
        let isValid = true;

        if (username.trim().length === 0) {
            setUsernameError(errorMessages.emptyName);
            isValid = false;
        } else if (!nameRegex.test(username)) {
            setUsernameError(errorMessages.nameRegex);
            isValid = false;
        }

        if (email.trim().length === 0) {
            setEmailError(errorMessages.emptyEmail);
            isValid = false;
        } else if (!emailRegex.test(email)) {
            setEmailError(errorMessages.emailRegex);
            isValid = false;
        }

        if (password.trim().length === 0) {
            setPasswordError(errorMessages.emptyPassword);
            isValid = false;
        } else if (password.length < 8) {
            setPasswordError(errorMessages.weakPassword);
            isValid = false;
        } else if (!letter.test(password) || !numbers.test(password) || !spcialChar.test(password)) {
            setPasswordError(errorMessages.specialChar);
            isValid = false;
        } else if (onlyLatter.test(password) || onlyNumbers.test(password)) {
            setPasswordError(errorMessages.latterOrNumber);
            isValid = false;
        }

        if (isValid) {
            setSubmiting(true);
            setTimeout(() => {
                dispatch(signup({ username, email, password }));
                navigation.navigate('Login');
                setSubmiting(false);
            }, 1000);
        }
    };


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Signup</Text>

            <TextField
                placeholder="Enter your Name"
                value={username}
                onChangeText={setUsername}
                onFocus={handleTextFieldFocused}
                onBlur={handleTextFieldBlur}
                isFocused={usernameFocused}
                error={usernameError}
            />

            <TextField
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                onFocus={handleEmailFocused}
                onBlur={handleEmailBlur}
                isFocused={emailFocused}
                error={emailError}
            />

            <TextField
                placeholder="Enter your Password"
                value={password}
                onChangeText={setPassword}
                onFocus={handlePasswordFieldFocused}
                onBlur={handlePasswordFieldBlur}
                isFocused={passwordFocused}
                showPassword={showPassword}
                toggleShowPassword={togglePassword}
                error={passwordError}
                isPassword={true}
            />

            {/* <TextField
                placeholder="Enter your Password"
                value={password}
                onChangeText={setPassword}
                onFocus={handlePasswordFieldFocused}
                onBlur={handlePasswordFieldBlur}
                isFocused={passwordFocused}
                showPassword={showPassword}
                toggleShowPassword={togglePassword}
                error={passwordError}
                passwordField={true}
            /> */}

            <CustomButton
                title="Sign up"
                handlePress={validateAndLogin}
                submit={isSubmiting}
            />
            <TouchableOpacity style={styles.arrowButton} onPress={() => navigation.navigate('Login')}>
                <Image
                    source={require("../assets/icons/arrow.png")}
                    style={styles.arrowIcon}
                />
                <Text style={styles.arrowButtonText}>Go to Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
        textAlign: 'center',
    },
    arrowButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
    },
    arrowButtonText: {
        fontSize: 16,
        color: 'black',
        marginLeft: 10,
        fontWeight: 'bold',
    },
    arrowIcon: {
        width: 18,
        height: 18
    },
});
