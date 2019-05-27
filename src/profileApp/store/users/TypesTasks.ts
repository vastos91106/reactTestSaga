export const GET_USER = 'GET_USER';
export const USER_RECEIVED = 'USER_RECEIVED';
export const EDIT_VISIBILITY = 'EDIT_VISIBILITY';

interface GetUserAction {
    type: typeof GET_USER,
}

interface UserReceivedAction {
    type: typeof USER_RECEIVED,
    payload: User
}

interface ChangeEditVisibilityAction {
    type: typeof EDIT_VISIBILITY,
    payload: boolean
}

export interface User {
    id: number,
    current: boolean,
    email: string,
    phone: string,
    webSite: string,
    name: string,
}

export interface UserState {
    user?: User,
    edit: boolean
}


export type TypesUsers = GetUserAction | UserReceivedAction | ChangeEditVisibilityAction;