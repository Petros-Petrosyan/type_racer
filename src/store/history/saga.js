// saga effects
import {
    put,
    takeEvery,
    all,
} from 'redux-saga/effects';

// http services
import {
    createHistoryRequest,
    getHistoryRequest
} from '../../services/httpServices';

// action types
import {
    GET_HISTORY_INIT,
    CREATE_HISTORY_INIT,
} from '../action-types';

// actions
import {
    getHistoryStart,
    getHistorySuccess,
    getHistoryFail,

    createHistoryStart,
    createHistorySuccess,
    createHistoryFail,
} from './action';


function* getHistory() {
    yield put(getHistoryStart());
    try {
        const history = yield getHistoryRequest();
        if (!history) {
            throw new Error('History Null')
        }
        yield put(getHistorySuccess(history));
    } catch (err) {
        console.log('Something Wrong');
        yield put(getHistoryFail());
    }
}

function* createHistory(action) {
    const {payload: {history}} = action;
    yield put(createHistoryStart());
    try {
        yield createHistoryRequest(history);
        yield put(createHistorySuccess());
    } catch (err) {
        console.log('Something Wrong');
        yield put(createHistoryFail());
    }
}


export function* historySaga() {
    yield all([
        takeEvery(GET_HISTORY_INIT, getHistory),
        takeEvery(CREATE_HISTORY_INIT, createHistory),
    ]);
}