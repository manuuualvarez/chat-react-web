import { types } from "../../types/types";


export const chatReducer = (state, action) => {

    switch (action.type) {
        case types.usersLoaded:
            return {
                ...state,
                users: [...action.payload]
            }
        case types.usersChatSelected:
            return {
                ...state,
                chatActive: action.payload,
            }
        default:
            return state;
    }
}