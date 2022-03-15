import { createSlice } from "@reduxjs/toolkit";
import { addQuizToTopic } from "../topics/topicsSlice";

//Slice
const initialState = {
    quizzes: {}
}

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: initialState,
    reducers: {
        addQuiz: (state, action) => {
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
        }
    }
})

export const addQuizThunk = (quiz) => {
    const { topicId, id } = quiz;
    return (dispatch) => {
      // dispatch multiple actions here
      dispatch(quizzesSlice.actions.addQuiz(quiz));
      dispatch(addQuizToTopic({
          topicId: topicId,
          quizId: id
      }))
    };
};

//actions
export const { addQuiz } = quizzesSlice.actions;
//selectors
export const selectQuizzes = (state) => state.quizzes.quizzes;
//reducer
export default quizzesSlice.reducer;