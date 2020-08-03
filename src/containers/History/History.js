import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// action
import { getHistoryInit } from '../../store/history/action';

// classes
import classes from './History.module.scss';

// components
import { ViewHistory } from '../../components';
import ClipLoader from 'react-spinners/ClipLoader';


class History extends React.Component {
    componentDidMount() {
        const {getHistory} = this.props;
        getHistory();
    }

    render() {
        const {history: {historyList, loading, exist}} = this.props;

        let viewHistory;
        if (exist) {
            const history = Object.values(historyList);
            viewHistory = <ViewHistory historyList={history} />
        } else {
            viewHistory = <div className={classes.noHistory}>There is no history</div>
        }
        if (loading) {
            viewHistory = <div style={{textAlign: 'center'}}><ClipLoader /></div>
        }

        return (
                <main className={classes.history}>
                    <h1 className={classes.history__title}>History</h1>
                    <div className={classes.history__game}>
                        <Link to='/'>Click on me to return the game</Link>
                    </div>

                    {viewHistory}
                </main>
            );
    }
};

const mapStateToProps = (state) => {
    return {
        history: state.historyReducer.history
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getHistory: () => dispatch(getHistoryInit()),
    }
};


const HistoryWrapper = connect(mapStateToProps, mapDispatchToProps)(History);
export {HistoryWrapper as History}