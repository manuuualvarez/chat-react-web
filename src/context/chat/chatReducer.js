import { types } from "../../types/types";


export const chatReducer = (state, action) => {

    switch (action.type) {
        case types.usersLoaded:
            return {
                ...state,
                users: [...action.payload]
            }
        case types.usersChatSelected:
            // Avoid that remove the messages when the user is selected and tapped twice
            if (state.chatActive === action.payload) return state;
            // Select the new user as active and clean the messages
            return {
                ...state,
                chatActive: action.payload,
                messages: []
            }
        case types.newMessage:

        if (state.chatActive === action.payload.from  || state.chatActive === action.payload.to) {
            return {
                ...state,
                messages: [...state.messages, action.payload]
            } 
        } else {
            return state;
        }
        default:
            return state;
    }
}