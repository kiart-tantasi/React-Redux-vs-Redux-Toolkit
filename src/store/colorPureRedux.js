const colorReducer = (state = {color:"#000"}, action) => {
    switch(action.type) {
        case "green":
            return {color:"green"}
        case "red":
            return {color:"red"}
        case "blue":
            return {color:"blue"}
        case "resetColor":
            return {color:"#000"}
        default:
            return state;
    }
}

export default colorReducer