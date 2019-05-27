export const GET_TASKS = 'GET_TASKS';
export const TASKS_RECEIVED = 'TASKS_RECEIVED';
export const ALL_DATA_RECEIVED = 'ALL_DATA_RECEIVED';

interface GetTasksAction {
    type: typeof GET_TASKS,
}

interface TaskReceivedAction {
    type: typeof TASKS_RECEIVED,
    payload: Task[]
}

interface AllDataReceivedAction {
    type: typeof ALL_DATA_RECEIVED,
    payload: boolean
}

export interface Task {
    userId: number
    title: string,
    complete: boolean
}

export interface TaskState {
    tasks: Task[],
    isLoading: boolean
}


export type TypesTasks = GetTasksAction | TaskReceivedAction | AllDataReceivedAction;