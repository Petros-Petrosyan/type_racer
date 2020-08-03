// action types
import {
    START_GAME,
    FINISH_GAME,
    WRITE_LETTER,
    CHANGE_CURRENT_INDEX,
    COLLECT_ERRORS,
    CHANGE_TIME,

    GET_TEXT_INIT,
    GET_TEXT_START,
    GET_TEXT_SUCCESS,
    GET_TEXT_FAIL,
} from '../action-types';

export const startGame = () => {
    return {
        type: START_GAME
    }
};
export const finishGame = () => {
    return {
        type: FINISH_GAME
    }
};

export const changeTime = (time) => {
    return {
        type: CHANGE_TIME,
        payload: {time}
    }
}

export const writeLetter = (letter) => {
    return {
        type: WRITE_LETTER,
        payload: {letter}
    }
};
export const changeCurrentIndex = (index) => {
    return {
        type: CHANGE_CURRENT_INDEX,
        payload: {index}
    }
};

export const collectErrors = (error) => {
    return {
        type: COLLECT_ERRORS,
        payload: {error}
    }
}

export const getTextInit = (sentences) => {
    return {
        type: GET_TEXT_INIT,
        payload: {sentences}
    }
}
export const getTextStart = () => {
    return {
        type: GET_TEXT_START
    }
};
export const getTextSuccess = (text) => {
    return {
        type: GET_TEXT_SUCCESS,
        payload: {text}
    }
};
export const getTextFail = () => {
    return {
        type: GET_TEXT_FAIL
    }
};