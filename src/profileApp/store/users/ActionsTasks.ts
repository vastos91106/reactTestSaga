import {TypesUsers, GET_USER, USER_RECEIVED, EDIT_VISIBILITY, User} from "./TypesTasks";


export function getUser(): TypesUsers {
    return {
        type: GET_USER,
    }
}

export function usersReceived(payload: User): TypesUsers {
    return {
        type: USER_RECEIVED,
        payload: payload
    }
}

export function changeVisibility(payload: boolean) {
    return {
        type: EDIT_VISIBILITY,
        payload: payload
    }
}