import {combineReducers} from "redux";
import {taskReducer} from './tasks/ReducerTasks';
import {usersReducer} from './users/ReducerUsers'

export const rootReducer = combineReducers({
    tasks: taskReducer,
    users: usersReducer,
});


export type AppState = ReturnType<typeof rootReducer>