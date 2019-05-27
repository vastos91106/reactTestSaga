import {UserState, GET_USER, USER_RECEIVED, EDIT_VISIBILITY, TypesUsers} from './TypesTasks';

const initialState: UserState = {
    user: null,
    edit: false
};

export function userReducer(state = initialState, action: TypesUsers): UserState {
    switch (action.type) {

        case GET_USER:
            return {
                user: state.user,
                ...state
            };

        case USER_RECEIVED:
            return {
                user: action.payload,
                edit: state.edit
            };

        case EDIT_VISIBILITY:
            return {
                user: state.user,
                edit: action.payload
            };

        default:
            return state;
    }
}