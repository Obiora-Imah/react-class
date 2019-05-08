import * as Variables from "../actions/type";

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case Variables.SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload }
        case Variables.SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null }
        default:
            return state
    }
}