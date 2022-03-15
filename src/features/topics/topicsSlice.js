import { createSlice } from "@reduxjs/toolkit";

//Slice
const initialState = {
    topics: {}
};

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon,
                quizIds: []
            }
        },
        addQuizToTopic: (state, action) => {
            const { topicId, quizId } = action.payload;
            state.topics[topicId].quizIds.push(quizId);
          }
    }
});

//actions
export const { addTopic, addQuizToTopic } = topicsSlice.actions;
//selectors
export const selectTopics = (state) => state.topics.topics;
//reducer
export default topicsSlice.reducer;