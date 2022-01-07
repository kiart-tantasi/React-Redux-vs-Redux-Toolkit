const counterReducer = (state = { counter: 1000 }, action) => {
    switch(action.type) {
        case "increment":
            return { counter: state.counter + 1}
        case "decrement":
            return { counter: state.counter - 1}
        case "plus":
            return { counter: state.counter + action.payload}
        case "minus":
            return { counter: state.counter - action.payload}
        case "resetCounter":
            return { counter: 1000 }
        default:
            return state;
    }
}

export default counterReducer;