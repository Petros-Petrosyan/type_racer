import React from 'react';

// classes
import classes from './Keyboard.module.scss';

// components
import { KeyboardButton } from '.';


const Keyboard = (props) => {
    const {
        keyboardButtons,
        currentIndex,
        text,
        onChangeCurrentIndex,
        onWriteLetter,
        onFinishGame,
        onCollectErrors,
    } = props;
    const sectionKeys = Object.keys(keyboardButtons);

    const keyboard = sectionKeys
        .map(sectionKey => {
            const keyboardButtonEls = keyboardButtons[sectionKey]
                .map(sectionValue => (
                    <KeyboardButton
                        key={sectionValue.id}
                        currentIndex={currentIndex}
                        text={text}
                        onChangeCurrentIndex={onChangeCurrentIndex}
                        onWriteLetter={onWriteLetter}
                        onFinishGame={onFinishGame}
                        onCollectErrors={onCollectErrors}
                        {...sectionValue} />
                ));

            return (
                <div key={sectionKey} className={classes.keyboard__section}>
                    {keyboardButtonEls}
                </div>
            )
        });

    return (
        <section className={classes.keyboard}>
            {keyboard}
        </section>
    )
}

export { Keyboard }