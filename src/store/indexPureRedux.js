import { combineReducers, createStore } from "redux";

// ----------------- REDUX ----------------- //
const counterReducer = (state = { counter: 200 }, action) => {
    switch(action.type) {
        case "increment":
            return { counter: state.counter + 2}
        case "decrement":
            return { counter: state.counter - 2}
        case "plus":
            return { counter: state.counter + action.payload}
        case "minus":
            return { counter: state.counter - action.payload}
        case "reset":
            return { counter: 200 }
        default:
            return state;
    }
}

const colorReducer = (state = {color:"#000"}, action) => {
    switch(action.type) {
        case "green":
            return {color:"green"}
        case "red":
            return {color:"red"}
        case "blue":
            return {color:"blue"}
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    counterReducer,
    colorReducer
});

const pureReduxStore = createStore(rootReducer);

export default pureReduxStore;
