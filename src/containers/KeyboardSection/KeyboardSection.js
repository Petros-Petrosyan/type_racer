import React from 'react';
import { connect } from 'react-redux';

// actions
import {
    writeLetter,
    changeCurrentIndex,
    finishGame,
    collectErrors,
} from '../../store/game/action';

// images
import keyboard from '../../assets/images/keyboard.webp';

// constants
import { KEYBOARD_BUTTONS } from '../../constants/kayboard';
import { IN_PROGRESS } from '../../constants/gameStatus';

// components
import { Keyboard } from '../../components';


class KeyboardSection extends React.Component {
    finishGame = () => {
        const {onFinishGame} = this.props;
        onFinishGame();
    }

    render() {
        const {
            status,
            currentIndex,
            text,
            onWriteLetter,
            onChangeCurrentIndex,
            onCollectErrors,
        } = this.props;

        let viewKeyboard = <div style={{textAlign: 'center'}}><img src={keyboard} alt='Keyboard' /></div>;
        if (status === IN_PROGRESS) {
            viewKeyboard = (
                <Keyboard
                    keyboardButtons={KEYBOARD_BUTTONS}
                    currentIndex={currentIndex}
                    text={text}
                    onChangeCurrentIndex={onChangeCurrentIndex}
                    onWriteLetter={onWriteLetter}
                    onFinishGame={this.finishGame}
                    onCollectErrors={onCollectErrors}
                />
            )
        }

        return viewKeyboard;
    }
};


const mapStateToProps = (state) => {
    return {
        status: state.gameReducer.game.gameStatus,
        currentIndex: state.gameReducer.textInfo.currentIndex,
        text: state.gameReducer.textInfo.text,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onWriteLetter: (letter) => dispatch(writeLetter(letter)),
        onChangeCurrentIndex: (index) => dispatch(changeCurrentIndex(index)),
        onFinishGame: () => dispatch(finishGame()),
        onCollectErrors: (error) => dispatch(collectErrors(error))
    }
};

const KeyboardSectionWrapper = connect(mapStateToProps, mapDispatchToProps)(KeyboardSection);
export {KeyboardSectionWrapper as KeyboardSection}