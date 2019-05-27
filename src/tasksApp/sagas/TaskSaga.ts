import {put, takeLatest, all, take, select} from 'redux-saga/effects';

import HTTPTask from '../http/HTTPTask';


import {GET_TASKS, TASKS_RECEIVED, Task} from '../store/tasks/TypesTasks';

const HTTP = new HTTPTask();

function* fetchTasks() {

    const model = yield  HTTP.GetTasks().then((resp) => {
        return resp.Model;
    });

    const data: Task[] = [];
    const usersIds = [];

    model.forEach((item) => {
        if (!usersIds.find((id) => id === item.userId)) {
            usersIds.push(item.userId);
        }

        data.push({
            userId: item.userId,
            title: item.title,
            complete: item.completed
        })
    });


    yield put({type: 'GET_USERS_BY_ID', usersIds});

    yield put({type: TASKS_RECEIVED, payload: data});
}


function* taskActionWatcher() {
    yield takeLatest(GET_TASKS, fetchTasks)
}

export default taskActionWatcher;
