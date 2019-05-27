import {put, takeLatest, all} from 'redux-saga/effects';

import taskActionWatcher from './TaskSaga';
import usersActionWatcher from './UserSaga';

export default function* rootSaga() {
    yield all([
        taskActionWatcher(),
        usersActionWatcher()
    ]);
}