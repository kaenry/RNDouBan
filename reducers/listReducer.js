import * as types from '../actions/actionTypes';
const initialState = {
    contents: [],
    isLoading: true
};

let ListReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.FETCH_LIST:
        return Object.assign({}, state, {
            isLoading: action.isLoading
        })
        case types.RECEIVE_LIST:
            return Object.assign({}, state, {
                contents: action.contents,
                isLoading: false
            })
        default:
            return state;
    }
}

export default ListReducer;
