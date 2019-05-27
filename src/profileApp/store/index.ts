import {combineReducers} from "redux";
import {taskReducer} from './tasks/ReducerTasks';
import {userReducer} from './users/ReducerUser'

export const rootReducer = combineReducers({
    tasks: taskReducer,
    user: userReducer,
});


export type AppState = ReturnType<typeof rootReducer>