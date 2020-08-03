import update from 'react-addons-update';

// action types
import {
    GET_HISTORY_START,
    GET_HISTORY_SUCCESS,
    GET_HISTORY_FAIL,

    CREATE_HISTORY_START,
    CREATE_HISTORY_SUCCESS,
    CREATE_HISTORY_FAIL,
} from '../action-types';

const initialState = {
    history: {
        historyList: null,
        loading: false,
        exist: false,
    },
    historyCreate: {
        loading: false,
    },
};

const getHistoryStart = (state) => {
    return update(state, {
        history: {$merge: {
                loading: true,
                exist: false,
            }}
    })
};
const getHistorySuccess = (state, payload) => {
    const {history} = payload;
    return update(state, {
        history: {$merge: {
                historyList: history,
                loading: false,
                exist: true,
            }}
    })
};
const getHistoryFail = (state) => {
    return update(state, {
        history: {$merge: {
                loading: false,
                exist: false,
            }}
    })
};

const createHistoryStart = (state) => {
    return update(state, {
        historyCreate: {$merge: {
                loading: true
            }}
    })
};
const createHistorySuccess = (state) => {
    return update(state, {
        historyCreate: {$merge: {
                loading: false
            }}
    })
};
const createHistoryFail = (state) => {
    return update(state, {
        historyCreate: {$merge: {
                loading: false
            }}
    })
};


const historyReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_HISTORY_START: return getHistoryStart(state);
        case GET_HISTORY_SUCCESS: return getHistorySuccess(state, payload);
        case GET_HISTORY_FAIL: return getHistoryFail(state);

        case CREATE_HISTORY_START: return createHistoryStart(state);
        case CREATE_HISTORY_SUCCESS: return createHistorySuccess(state);
        case CREATE_HISTORY_FAIL: return createHistoryFail(state);

        default: return state;
    }
};

export { historyReducer };