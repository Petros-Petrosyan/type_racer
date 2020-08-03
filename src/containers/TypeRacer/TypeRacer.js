import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// game status
import { INIT } from '../../constants/gameStatus';

// actions
import {
    getTextInit,
    startGame,
} from '../../store/game/action';

// classes
import classes from './TypeRacer.module.scss';

// containers
import {
    KeyboardSection,
    ResultSection,
    TextSection,
} from '..';
import { ShowInfo } from '../../components';


class TypeRacer extends React.Component {
    render() {
        const {
            startGame,
            getText,
            status,
        } = this.props;

        const start = () => {
            startGame();
            getText(1);
        }

        let startBtn = null;
        if (status === INIT) {
            startBtn = (
                <div className={classes.main__startBtn}>
                    <span onClick={start}>Click on me to start typing</span>
                </div>
            )
        }

        let checkoutButton = (
            <div className={classes.disabled}>
                <span>Click on me to see game history</span>
            </div>
        )
        if (status === INIT) {
            checkoutButton = (
                <div className={classes.main__history}>
                    <Link to='/history'>Click on me to see game history</Link>
                </div>
            )
        }

        return (
            <main className={classes.main}>
                <h1 className={classes.main__title}>Type Racer</h1>
                {checkoutButton}
                <ResultSection />
                <TextSection />
                {startBtn}
                <KeyboardSection />
                <ShowInfo />
            </main>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        status: state.gameReducer.game.gameStatus,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => dispatch(startGame()),
        getText: (sentences) => dispatch(getTextInit(sentences))
    }
};

const TypeRacerWrapper = connect(mapStateToProps, mapDispatchToProps)(TypeRacer);
export {TypeRacerWrapper as TypeRacer}