export const GET_USERS = 'GET_USERS';
export const USERS_RECEIVED = 'USERS_RECEIVED';

interface GetUsersAction {
    type: typeof GET_USERS,
}

interface UsersReceivedAction {
    type: typeof USERS_RECEIVED,
    payload: User[]
}

export interface User {
    id: number,
    current: boolean,
    email: string,
    phone: string,
    webSite: string,
    userName: string
}

export interface UserState {
    users: User[],
}


export type TypesUsers = GetUsersAction | UsersReceivedAction ;