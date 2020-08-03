import React from 'react';
import { connect } from 'react-redux';

// classes
import classes from './TextSection.module.scss';

// components
import BeatLoader from 'react-spinners/BeatLoader';
import { ViewText } from '../../components';


class TextSection extends React.Component {
    render() {
        const {
            textInfo: {loading, exist, text},
            currentIndex,
            errors,
        } = this.props;

        let viewText = null;
        if (loading) {
            viewText = <div style={{textAlign: 'center'}}><BeatLoader /></div>
        }
        if (exist) {
            viewText = (
                <ViewText
                    currentIndex={currentIndex}
                    text={text}
                    errors={errors}
                />
            )
        }

        return <div className={classes.textContainer}>{viewText}</div>
    }
};


const mapStateToProps = (state) => {
    return {
        textInfo: state.gameReducer.textInfo,
        currentIndex: state.gameReducer.textInfo.currentIndex,
        errors: state.gameReducer.textInfo.errors,
    }
};

const TextSectionWrapper = connect(mapStateToProps, null)(TextSection);
export {TextSectionWrapper as TextSection}