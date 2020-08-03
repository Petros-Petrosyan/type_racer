import React from 'react';

// classes
import classes from './Letter.module.scss';
import classNames from 'classnames';


const Letter = (props) => {
    const {
        letter,
        currentLetter,
        isError,
    } = props;

    return (
        <span
            className={
                classNames(classes.letter, {
                    [classes.space]: letter === ' ',
                    [classes.current]: currentLetter,
                    [classes.error]: isError,
                })
            }
        >
            {letter}
        </span>
    )
}

export { Letter }