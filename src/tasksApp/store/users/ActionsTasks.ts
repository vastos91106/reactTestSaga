import {TypesUsers, GET_USERS, USERS_RECEIVED, User} from "./TypesTasks";


export function getUsers(): TypesUsers {
    return {
        type: GET_USERS,
    }
}

export function usersReceived(payload: User[]): TypesUsers {
    return {
        type: USERS_RECEIVED,
        payload: payload
    }
}