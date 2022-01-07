import { combineReducers, createStore } from "redux";
import counterReducer from "./counterPureRedux";
import colorReducer from "./colorPureRedux";

const rootReducer = combineReducers({
    counterReducer,
    colorReducer
});

const pureReduxStore = createStore(rootReducer);

export default pureReduxStore;
