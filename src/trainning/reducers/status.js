var initialState = false;

var myReducer = (state = initialState, action) => {
    if(action.type === 'TOGGOLE_STATUS') {
        state =! state;
        return state;
    }
    return state;
}

export default  myReducer;