import {put, takeLatest, all, take, select} from 'redux-saga/effects';

import HTTPTask from '../http/HTTPTask';


import {GET_TASKS, TASKS_RECEIVED, Task} from '../store/tasks/TypesTasks';

const HTTP = new HTTPTask();

function* fetchTasks() {

    const model = yield  HTTP.GetTasksByUser().then((resp) => {
        return resp.Model;
    });

    const data: Task[] = [];

    model.forEach((item) => {

        data.push({
            userId: item.userId,
            title: item.title,
            complete: item.completed
        })
    });

    const userId = model[0].userId;

    yield put({type: 'GET_USER_BY_ID', userId});

    yield put({type: TASKS_RECEIVED, payload: data});
}


function* taskActionWatcher() {
    yield takeLatest(GET_TASKS, fetchTasks)
}

export default taskActionWatcher;
