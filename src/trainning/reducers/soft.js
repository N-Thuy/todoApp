var initialState = {
        by: 'status',
        value: 1
}

var myReducer = (state = initialState, action) => {
    if(action.type === 'SOFT'){
        var {by, value} = action.soft;
        return {by, value}
    }
    return state;
}

export default  myReducer;