const initialState = {
    message: "This is the initial message"
} //Step-14

const reducer = (state=initialState,action)=>{//Step-15
    const newState = {...state}; //Step-16

    if(action.type === 'Message Change'){
        newState.message = "This is the new message from the reducer after the button was clicked."
    } //Step-17

    return newState;//Step-17
};

export default reducer;