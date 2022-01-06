import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import colorSlice from "./color";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        color: colorSlice.reducer
    }
})

export default store;
