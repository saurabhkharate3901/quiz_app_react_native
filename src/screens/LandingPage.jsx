import { View, StyleSheet, Image, Text } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native';

const LandingPage = () => {
    const navigation = useNavigation();
    const [isSubmiting, setSubmiting] = useState(false)
    const [isSignupSubmiting, setSignUpSubmiting] = useState(false)

    const goToLogin = () => {
        setSubmiting(true)
        setTimeout(() => {
            navigation.navigate('Login');
            setSubmiting(false)
        }, 1000);
    }

    const goToSignup = () => {
        setSignUpSubmiting(true)
        setTimeout(() => {
            navigation.navigate('Signup');
            setSignUpSubmiting(false)
        }, 1000);
    }

    return (
        < View style={styles.container}>
            <View style={styles.mainContainer}>
                  <Text  style={styles.heading}>
                     Test Your Knowledge With Quizzes
                  </Text>
            </View>
            <View style={styles.mainContainer2}>
                <CustomButton
                    title={"Sign up"}
                    handlePress={goToSignup}
                    submit={isSignupSubmiting}
                />
                <View style={styles.dividerContainer}>
                    <View style={styles.line} />
                    <Text style={styles.dividerText}>OR</Text>
                    <View style={styles.line} />
                </View>

                <CustomButton
                    title={"Login"}
                    handlePress={goToLogin}
                    submit={isSubmiting}
                />
            </View>
        </View>
    )
}

export default LandingPage

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : '#ffa500'
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        padding : 20
    },
    heading : {
       color : "#fff",
       fontSize :30,
    },
    mainContainer2: {
        // flex: 1,
        height : 270,
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
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    dividerText: {
        marginHorizontal: 10,
        color: '#555',
    },
    
})