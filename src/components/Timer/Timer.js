import React, { useEffect, useState } from 'react';

// game status
import { IN_PROGRESS } from '../../constants/gameStatus';

// classes
import classNames from 'classnames';
import classes from './Timer.module.scss';


const Timer = (props) => {
    const {
        status, // 'init', 'in-progress
        initialTime,
        onFinish,
        onChange,
    } = props;

    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        if (status === IN_PROGRESS) {
            startClock();
        }
    }, []);

    useEffect(() => {
        if (time === 0) {
            onFinish();
        } else {
            startClock(time);
            onChange(time);
        }

    }, [time])

    useEffect(() => {
        if (status === IN_PROGRESS) {
            startClock(initialTime);
        }
    }, [status]);

    const startClock = (_time = time) => {
        if (_time !== time) {
            setTime(_time);
        }
        const tik = () => {
            setTimeout(() => {
                if (status === IN_PROGRESS) {
                    setTime(_time - 1)
                }
            }, 1000);
        }
        tik();
    }

    return <div
        className={
            classNames(classes.timer, {
                [classes.orangeBg]: time <= 20,
                [classes.redBg]: time === 0,
            })
        }
    >
        {time}
    </div>
}

export { Timer }