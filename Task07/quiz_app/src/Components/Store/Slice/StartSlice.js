import { createSlice } from '@reduxjs/toolkit'
import QuizData from '../../../Data/Data.json';

const initialState = {
    Start : false,
    CorrectAnswers : 0,
    WrongAnswers : 0,
    result : 0,
}

const StartSlice = createSlice({
    name : 'StartSlice',
    initialState,
    reducers: {
        toggleStart(state, action){
            state.Start = action.payload;
        },
        addCorrectAnswer : (state, action) => {
            state.CorrectAnswers = state.CorrectAnswers + 1;
        },
        addWrongAnswer : (state, action) => {
            state.WrongAnswers = state.WrongAnswers + 1;
        },
        prepareResult : (state, action) => {
            state.result = (state.CorrectAnswers/QuizData.questions.length)*100;
        },
        resetData : (state, action) => {
            state.CorrectAnswers = 0;
            state.WrongAnswers = 0;
            state.result = 0;
            state.Start = false;
        }
    }
}    
)

export const {toggleStart, addCorrectAnswer, addWrongAnswer, prepareResult, resetData} = StartSlice.actions;
export default StartSlice.reducer;
