import React from 'react';
import { connect } from 'react-redux';

// action
import { finishGame, changeTime } from '../../store/game/action';
import { createHistoryInit } from '../../store/history/action';

// classes
import classes from './ResultSection.module.scss';

// components
import {
    Result,
    Timer
} from '../../components';


class ResultSection extends React.Component {
    createHistory = (history) => {
        const {onCreateHistory} = this.props;
        onCreateHistory(history);
    }

    render() {
        const {
            time,
            status,
            gameFinish,
            text,
            currentIndex,
            errors,
            finishGame,
            onChangeTime,
        } = this.props;

        return (
                <section className={classes.resultSection}>
                    <Result
                        time={time}
                        gameFinish={gameFinish}
                        status={status}
                        text={text}
                        currentIndex={currentIndex}
                        errors={errors}
                        onCreateHistory={this.createHistory}
                    />
                    <Timer
                        onFinish={finishGame}
                        status={status}
                        initialTime={60}
                        onChange={onChangeTime}
                    />
                </section>
            );
    }
};

const mapStateToProps = (state) => {
    return {
        status: state.gameReducer.game.gameStatus,
        gameFinish: state.gameReducer.game.finishGame,
        time: state.gameReducer.game.time,
        text: state.gameReducer.textInfo.text,
        currentIndex: state.gameReducer.textInfo.currentIndex,
        errors: state.gameReducer.textInfo.errors,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        finishGame: () => dispatch(finishGame()),
        onCreateHistory: (history) => dispatch(createHistoryInit(history)),
        onChangeTime: (time) => dispatch(changeTime(time))
    }
};

const ResultSectionWrapper = connect(mapStateToProps, mapDispatchToProps)(ResultSection);
export {ResultSectionWrapper as ResultSection}