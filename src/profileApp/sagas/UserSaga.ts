import {put, takeLatest, all, take, call} from 'redux-saga/effects';

import HTTPUser from "../http/HTTPUser";
import {TASKS_RECEIVED, ALL_DATA_RECEIVED} from "../store/tasks/TypesTasks";


import {USER_RECEIVED, EDIT_VISIBILITY, User} from '../store/users/TypesTasks';

import {getFromWindow, setToWindow} from '../../helpers/WindowHelper';

const HTTP = new HTTPUser();

function* fetchUser(userId: number) {
    const model = yield  HTTP.GetById(userId).then((resp) => {
        const Model = resp.Model[0];

        const user: User = {
            id: Model.id,
            name: Model.name,
            current: Model.id === 1,
            email: Model.email,
            phone: Model.phone,
            webSite: Model.website
        };

        return user;
    });

    return model;
}


function* manipulate(params) {

    let user: User[] = null;
    const savedUser = getFromWindow('user');

    if (!!savedUser) {
        user = savedUser;
    } else {
        user = yield fetchUser(params.userId);
    }

    yield put({type: USER_RECEIVED, payload: user});
    yield put({type: EDIT_VISIBILITY, payload: false});
    yield put({type: ALL_DATA_RECEIVED, payload: {isLoading: false}});
}

function* updateUser(params) {
    yield put({type: USER_RECEIVED, payload: params.payload});
    yield put({type: EDIT_VISIBILITY, payload: false});
    setToWindow('user', params.payload);
}

function* usersActionWatcher() {
    yield takeLatest('GET_USER_BY_ID', manipulate);
    yield takeLatest('UPDATE_USER', updateUser);
}

export default usersActionWatcher;
