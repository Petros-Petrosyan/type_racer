import update from 'react-addons-update';

// game status
import {
    IN_PROGRESS,
    INIT,
} from '../../constants/gameStatus';

// action types
import {
    START_GAME,
    FINISH_GAME,
    WRITE_LETTER,
    CHANGE_CURRENT_INDEX,
    COLLECT_ERRORS,
    CHANGE_TIME,

    GET_TEXT_START,
    GET_TEXT_SUCCESS,
    GET_TEXT_FAIL,
} from '../action-types';

const initialState = {
    game: {
        gameStatus: INIT,
        finishGame: false,
        time: 60,
    },
    textInfo: {
        text: 'Click the button to get the text',
        loading: false,
        exist: true,
        currentIndex: 0,
        writtenLetter: null,
        errors: [],
    }
};

const startGame = (state) => {
    return update(state, {
        game: {$merge: {
                gameStatus: IN_PROGRESS,
                finishGame: false
            }},
        textInfo: {$merge: {
                currentIndex: 0,
                writtenLetter: null,
                errors: [],
            }
        }
    })
};
const finishGame = (state) => {
    return update(state, {
        game: {$merge: {
                gameStatus: INIT,
                finishGame: true
            }},
    })
};

const changeTime = (state, payload) => {
    const {time} = payload;
    return update(state, {
        game: {$merge: {
                finishGame: false,
                time,
            }},
    })
};

const writeLetter = (state, payload) => {
    const {letter} = payload;
    return update(state, {
        textInfo: {$merge: {
                writtenLetter: letter,
            }},
        game: {$merge: {
                finishGame: false,
            }},
    })
};
const changeCurrentIndex = (state, payload) => {
    const {index} = payload;
    return update(state, {
        textInfo: {$merge: {
                currentIndex: index,
            }},
        game: {$merge: {
                finishGame: false,
            }},
    })
};

const collectErrors = (state, payload) => {
    const {error} = payload;
    const newErrors = [...state.textInfo.errors];
    if (!newErrors.includes(error)) {
        newErrors.push(error);
    }

    return update(state, {
        textInfo: {$merge: {
                errors: newErrors,
            }},
        game: {$merge: {
                finishGame: false,
            }},
    })
}

const getTextStart = (state) => {
    return update(state, {
        textInfo: {$merge: {
                loading: true,
                exist: false,
            }},
        game: {$merge: {
                finishGame: false,
            }},
    })
};
const getTextSuccess = (state, payload) => {
    const {text} = payload;
    return update(state, {
        textInfo: {$merge: {
                text,
                loading: false,
                exist: true,
            }}
    })
};
const getTextFail = (state) => {
    return update(state, {
        textInfo: {$merge: {
                loading: false,
                exist: false,
            }}
    })
};

const gameReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case START_GAME: return startGame(state);
        case FINISH_GAME: return finishGame(state);
        case WRITE_LETTER: return writeLetter(state, payload);
        case CHANGE_CURRENT_INDEX: return changeCurrentIndex(state, payload);
        case COLLECT_ERRORS: return collectErrors(state, payload);
        case CHANGE_TIME: return changeTime(state, payload);

        case GET_TEXT_START: return getTextStart(state);
        case GET_TEXT_SUCCESS: return getTextSuccess(state, payload);
        case GET_TEXT_FAIL: return getTextFail(state);

        default: return state;
    }
};

export { gameReducer };