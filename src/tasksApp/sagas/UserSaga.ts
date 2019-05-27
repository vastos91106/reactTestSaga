import {put, takeLatest, all, take} from 'redux-saga/effects';

import HTTPUser from "../http/HTTPUser";
import {TASKS_RECEIVED, ALL_DATA_RECEIVED} from "../store/tasks/TypesTasks";


import {USERS_RECEIVED, User} from '../store/users/TypesTasks';

const HTTP = new HTTPUser();

function* fetchUser(userId: number) {
    const model = yield  HTTP.GetById(userId).then((resp) => {
        const Model = resp.Model[0];

        const user: User = {
            id: Model.id,
            userName: Model.name,
            current: Model.id === 1,
            email: Model.email,
            phone: Model.phone,
            webSite: Model.WebSite
        };

        return user;
    });

    return model;
}

function* fetchUses(params) {

    const data: User[] = [];

    const trivialGenerator = function* (array) {
        for (let userId of array) {
            const user = yield fetchUser(userId);
            data.push(user);
        }
    };
    yield trivialGenerator(params.usersIds);

    yield put({type: USERS_RECEIVED, payload: data});
    yield put({type: ALL_DATA_RECEIVED, payload: {isLoading: false}});
}

function* usersActionWatcher() {
    yield takeLatest('GET_USERS_BY_ID', fetchUses)
}

export default usersActionWatcher;
