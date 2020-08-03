import React from 'react';

// classes
import classes from './ShowInfo.module.scss';


const ShowInfo = () => {
    return (
        <section className={classes.showText}>
            <h2>Start Touch Typing</h2>
            <p>This worth-learning skill will make your work much more productive. Moreover, it's an interactive and engaging game that can teach you how to type.</p>
        </section>
    )
}

export { ShowInfo }