import React from 'react';

// classes
import classes from './ViewHistory.module.scss';


const ViewHistory = (props) => {
    const {historyList} = props;

    const history = historyList.map((history, i) => {
       const {completionPercent, errorCount, speed} = history;
       return (
           <div key={i} className={classes.historySection__history}>
               <h3>Game: {i+1}</h3>
               <p>Speed: {speed} WPM</p>
               <p>Completion percent: {completionPercent} %</p>
               <p>Errors: {errorCount}</p>
           </div>
       )
    });

    return (
        <section className={classes.historySection}>
            {history}
        </section>
    )
}

export { ViewHistory }