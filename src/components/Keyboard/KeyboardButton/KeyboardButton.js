import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import update from 'react-addons-update';

// classes
import classes from './KeyboardButton.module.scss';
import classNames from 'classnames';


const KeyboardButton = (props) => {
    const [keyboardClasses, setKeyboardClasses] = useState([classes.keyboardButton]);
    const {
        id,
        value,
        style,
        src,
        currentIndex,
        text,
        onChangeCurrentIndex,
        onWriteLetter,
        onFinishGame,
        onCollectErrors,
    } = props;

    useEffect(() => {
        createEventListener();
        return () => removeEventListener();
    });

    const onKeyDown = (event) => {
        if (id === event.keyCode) {
            const newKeyboardClasses = update(keyboardClasses, {
                $splice: [[1, 0, classes.isSubmit]]
            });
            setKeyboardClasses(newKeyboardClasses);
        }
    };
    const onKeyUp = (event) => {
        const {key, keyCode} = event;
        if (id === keyCode) {
            onWriteLetter(key);

            const newKeyboardClasses = update(keyboardClasses, {
                $splice: [[keyboardClasses.length-1, 1]]
            });
            setKeyboardClasses(newKeyboardClasses);

            if (currentIndex === text.length-1) {
                onFinishGame();
            } else {
                if (text[currentIndex] === key) {
                    onChangeCurrentIndex(currentIndex + 1);
                }
                if (text[currentIndex] !== key && key !== 'Shift') {
                    if (text[currentIndex] !== ' ') {
                        onCollectErrors(currentIndex);
                    }
                }
            }
        }
    };

    const createEventListener = () => {
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);
    }

    const removeEventListener = () => {
        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('keyup', onKeyUp);
    }

    return (
        <span
            id={id}
            style={style}
            className={classNames(keyboardClasses)}
        >
            {src ? <img src={src} className={classes.pt} alt='arrow left' /> : value}
        </span>
    )
}


KeyboardButton.propTypes = {
    id: PropTypes.number.isRequired,
    value: PropTypes.string,
    style: PropTypes.object,
    src: PropTypes.string,
};

export { KeyboardButton }