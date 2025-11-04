import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../redux/slice/authSlice'
import quizReducer from '../redux/slice/quizSlice'

const store = configureStore ({
    reducer : {
        auth : authReducer,
        quiz: quizReducer,
    }
})

export default store;

