const initialState = {
    filter: ""
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "set_filter":
            return { ...state, filter: action.payload };
        default:
            return state;
    }
}