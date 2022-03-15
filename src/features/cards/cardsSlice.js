import { createSlice } from "@reduxjs/toolkit";

//Slice
export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const { id } = action.payload;
            state.cards[id] = action.payload;
        }
    }
});

//actions
export const { addCard } = cardsSlice.actions;
//selectors
export const selectCards = (state) => state.cards.cards;
//reducer
export default cardsSlice.reducer;