import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

// Reducers
import { gameReducer } from './game/reducer';
import { historyReducer } from './history/reducer';

// sagas
import createSagaMiddleware from 'redux-saga';
import { watchSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    gameReducer,
    historyReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchSaga);