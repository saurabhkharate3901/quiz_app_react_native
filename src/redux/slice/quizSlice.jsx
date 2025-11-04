import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    score: 0,
    questions: 0,
    subject:"",
}

const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        result: (state, action) => {
            state.score = action.payload.score;
        },
        numberOfQuestion: (state, action) => {
            state.questions = action.payload.questions;
        },
        whichSubject: (state, action) => {
            state.subject = action.payload.subject;
        }
    }
})

export const { result, numberOfQuestion,whichSubject } = quizSlice.actions;
export default quizSlice.reducer;