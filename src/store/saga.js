// saga effects
import { all } from 'redux-saga/effects';

// sagas
import { gameSaga } from './game/saga';
import { historySaga } from './history/saga';


export function* watchSaga() {
    yield all([
        gameSaga(),
        historySaga(),
    ])
}