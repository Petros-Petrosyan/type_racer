import React from 'react';

//constants
import { INIT } from '../../constants/gameStatus';

// classes
import classes from './Result.module.scss';


const Result = (props) => {
    const {
        time,
        status,
        text,
        currentIndex,
        errors,
        gameFinish,
        onCreateHistory,
    } = props;

    const viewErrorCount = errors.length;
    let completionPercent = (currentIndex / text.length) * 100;
    completionPercent = Math.ceil(completionPercent);
    if (currentIndex === text.length - 1) {
        completionPercent = 100;
    }

    let wpm = 0;
    if (currentIndex !== 0 && time !== 60) {
        wpm = Math.round((currentIndex/5) / ((60 - time)/60));
    }

    if (status === INIT && gameFinish) {
        const history = {
            speed: wpm,
            errorCount: viewErrorCount,
            completionPercent: completionPercent,
        };
        onCreateHistory(history)
    }

    return (
        <div>
            <div className={classes.result}>
                <span>Speed: <strong>{wpm} WPM</strong></span>
                <span>Completion percent: <strong>{completionPercent} %</strong></span>
                <span>Errors: <strong>{viewErrorCount}</strong></span>
            </div>
        </div>
    )
}

export { Result }