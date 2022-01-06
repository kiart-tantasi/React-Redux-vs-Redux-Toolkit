import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
    name: "color",
    initialState: {color:"#000"},
    reducers: {
        green(state) {
            state.color = "green";
        },
        red(state) {
            state.color = "red";
        },
        blue(state) {
            state.color = "blue"
        }
    }
});

export const colorActions = colorSlice.actions;
export default colorSlice;