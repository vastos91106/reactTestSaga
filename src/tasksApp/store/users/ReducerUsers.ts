import {UserState, GET_USERS, USERS_RECEIVED, TypesUsers} from './TypesTasks';

const initialState: UserState = {
    users: [],
};

export function usersReducer(state = initialState, action: TypesUsers): UserState {
    switch (action.type) {

        case GET_USERS:
            return {
                users: [...state.users]
            };

        case USERS_RECEIVED:
            return {
                users: [...state.users, ...action.payload],
            };

        default:
            return state;
    }
}