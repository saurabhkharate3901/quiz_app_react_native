import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Alert, TouchableOpacity, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/slice/authSlice';
import CustomButton from '../components/CustomButton';
import TextField from '../components/TextField';
import { emailRegex, errorMessages, letter, nameRegex, numbers, onlyLatter, onlyNumbers, spcialChar } from '../constant/Constant';

const Login = () => {
    const navigation = useNavigation();
    const { username,password,email } = useSelector((state) => state.auth);
     const [emailText, setEmail] = useState('')
    const [pass, setPass] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailFocused, setEmailFocud] = useState(false)
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [isSubmiting, setSubmiting] = useState(false)
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailFocused = () => { setEmailFocud(true) }
    const handleEmailBlur = () => { setEmailFocud(false) }
    const handlePasswordFieldFocused = () => { setPasswordFocused(true) }
    const handlePasswordFieldBlur = () => { setPasswordFocused(false) }
    const togglePassword = () => { setShowPassword(!showPassword) }

    const validateAndLogin = () => {
        let isValid = true;

        if (emailText.trim().length === 0) {
            setEmailError(errorMessages.emptyEmail);
            isValid = false;
        }
        if (!emailRegex.test(emailText)) {
            setEmailError(errorMessages.emailRegex);
            isValid = false;
        }
         if (emailText !== email) {
            setEmailError(errorMessages.incorrectEmail);
            isValid = false;
        }

        if (pass.trim().length === 0) {
            setPasswordError(errorMessages.emptyPassword);
            isValid = false;
        } else if (pass.length < 8) {
            setPasswordError(errorMessages.weakPassword);
            isValid = false;
        } else if (!letter.test(pass) || !numbers.test(pass) || !spcialChar.test(pass)) {
            setPasswordError(errorMessages.specialChar);
            isValid = false;
        } else if (onlyLatter.test(pass) || onlyNumbers.test(pass)) {
            setPasswordError(errorMessages.latterOrNumber);
            isValid = false;
        } else if (pass !== password) {
            setPasswordError(errorMessages.incorrectPassword);
            isValid = false;
        }


        if (isValid) {
            setSubmiting(true);
            setTimeout(() => {
                navigation.navigate('Dashboard', { username });
                setSubmiting(false);
            }, 1000);
        }
    };


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextField
                placeholder="Enter your email"
                value={emailText}
                onChangeText={setEmail}
                onFocus={handleEmailFocused}
                onBlur={handleEmailBlur}
                isFocused={emailFocused}
                error={emailError}
            />

            <TextField
                placeholder="Password"
                value={pass}
                onChangeText={setPass}
                onFocus={handlePasswordFieldFocused}
                onBlur={handlePasswordFieldBlur}
                isFocused={passwordFocused}
                showPassword={showPassword}
                toggleShowPassword={togglePassword}
                error={passwordError}
            />

            <CustomButton
                title="Login"
                handlePress={validateAndLogin}
                submit={isSubmiting}
            />
            <TouchableOpacity style={styles.arrowButton} onPress={() => navigation.navigate('Signup')}>
                <Image
                    source={require("../assets/icons/arrow.png")}
                    style={styles.arrowIcon}
                />
                <Text style={styles.arrowButtonText}>Go to Signup</Text>
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
