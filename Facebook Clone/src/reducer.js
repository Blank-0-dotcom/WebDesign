export const initialState = {
    user: null,
};
// initial state of the data layer

export const actionTypes = {
    SET_USER: "SET_USER",
};
// dispatch actions into the data layer 

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            // receive the action: if you just receive an action, return the new data layer
            return {
                ...state,
                user: action.user,
            };

        default:
            return state;
    }
};
export default reducer;