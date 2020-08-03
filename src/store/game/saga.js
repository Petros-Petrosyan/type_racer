// saga effects
import {
    put,
    takeEvery,
    all,
} from 'redux-saga/effects';

// http services
import { getTextRequest } from '../../services/httpServices';

// action types
import { GET_TEXT_INIT } from '../action-types';

// actions
import {
    getTextStart,
    getTextSuccess,
    getTextFail,
} from './action';


function* getText(action) {
    const {payload: {sentences}} = action;
    yield put(getTextStart());
    try {
        const text = yield getTextRequest(sentences);
        yield put(getTextSuccess(text));
    } catch (err) {
        console.log('Something Wrong');
        put(getTextFail());
    }
}

export function* gameSaga() {
    yield all([
        takeEvery(GET_TEXT_INIT, getText),
    ]);
}