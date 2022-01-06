import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {counter: 100},
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        plus(state,action) {
            state.counter = state.counter + action.payload
        },
        minus(state,action) {
            state.counter = state.counter - action.payload
        },
        reset(state,action){
            state.counter = action.payload;
        }
    }
})

export default counterSlice;
export const counterActions = counterSlice.actions;