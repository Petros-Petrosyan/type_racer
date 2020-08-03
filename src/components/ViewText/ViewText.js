import React from 'react';

// classes
import classes from './ViewText.module.scss';

// components
import { Letter } from '.';


const ViewText = (props) => {
    const {
        currentIndex,
        text,
        errors,
    } = props;

    const letters = text.split('').map((letter,i) => {
        const currentLetter = currentIndex === i;

        return (
            <Letter
                key={letter+i}
                letter={letter}
                currentLetter={currentLetter}
                isError={errors.includes(i)}
            />
        )
    });

    return (
        <div className={classes.center}>
            {letters}
        </div>
    )
}

export { ViewText }