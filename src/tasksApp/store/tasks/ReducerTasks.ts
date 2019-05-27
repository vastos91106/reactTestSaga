import {TaskState, TypesTasks, GET_TASKS, TASKS_RECEIVED, ALL_DATA_RECEIVED} from './TypesTasks';

const initialState: TaskState = {
    tasks: [],
    isLoading: true
};

export function taskReducer(state = initialState, action: TypesTasks): TaskState {
    switch (action.type) {

        case GET_TASKS:
            return {
                isLoading: true,
                tasks: [...state.tasks]
            };

        case TASKS_RECEIVED:
            return {
                tasks: [...state.tasks, ...action.payload],
                isLoading: true
            };

        case ALL_DATA_RECEIVED:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
}