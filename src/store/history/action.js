// action types
import {
    GET_HISTORY_INIT,
    GET_HISTORY_START,
    GET_HISTORY_SUCCESS,
    GET_HISTORY_FAIL,

    CREATE_HISTORY_INIT,
    CREATE_HISTORY_START,
    CREATE_HISTORY_SUCCESS,
    CREATE_HISTORY_FAIL,
} from '../action-types';

export const getHistoryInit = () => {
    return {
        type: GET_HISTORY_INIT
    }
};
export const getHistoryStart = () => {
    return {
        type: GET_HISTORY_START
    }
};
export const getHistorySuccess = (history) => {
    return {
        type: GET_HISTORY_SUCCESS,
        payload: {history}
    }
};
export const getHistoryFail = () => {
    return {
        type: GET_HISTORY_FAIL
    }
};

export const createHistoryInit = (history) => {
    return {
        type: CREATE_HISTORY_INIT,
        payload: {history}
    }
}
export const createHistoryStart = () => {
    return {
        type: CREATE_HISTORY_START
    }
};
export const createHistorySuccess = () => {
    return {
        type: CREATE_HISTORY_SUCCESS
    }
};
export const createHistoryFail = () => {
    return {
        type: CREATE_HISTORY_FAIL
    }
};