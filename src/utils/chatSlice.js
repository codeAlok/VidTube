import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            // remove one element after given_count element and add 1 element to start of array
            state.messages.splice(LIVE_CHAT_COUNT, 1);
            state.messages.unshift(action.payload);
        },
    }
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;