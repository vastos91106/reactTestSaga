import {TypesTasks, GET_TASKS, TASKS_RECEIVED, Task} from "./TypesTasks";


export function getTasks(): TypesTasks {
    return {
        type: GET_TASKS,
    }
}

export function taskReceived(payload: Task[]): TypesTasks {
    return {
        type: TASKS_RECEIVED,
        payload: payload
    }
}